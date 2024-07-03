type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface RequestOptions extends RequestInit {
  method: RequestMethod;
  headers?: Record<string, string>;
  body?: any;
}

class Api {
  private baseUrl: string;
  private accessToken: string | null = null;
  private refreshToken: string | null = null;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  setTokens(accessToken: string, refreshToken: string) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }

  clearTokens() {
    this.accessToken = null;
    this.refreshToken = null;
  }

  private async refreshAccessToken(): Promise<string> {
    if (!this.refreshToken) {
      throw new Error('No refresh token available');
    }

    const response = await fetch(`${this.baseUrl}/refresh-token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken: this.refreshToken }),
    });

    if (!response.ok) {
      throw new Error('Failed to refresh token');
    }

    const data = await response.json();
    this.accessToken = data.accessToken;
    return this.accessToken;
  }

  private async fetchWithInterceptor(
    url: string,
    options: RequestOptions
  ): Promise<Response> {
    const requestOptions: RequestOptions = {
      ...options,
      headers: {
        ...options.headers,
        'Content-Type': 'application/json',
      },
    };

    if (this.accessToken) {
      requestOptions.headers = {
        ...requestOptions.headers,
        Authorization: `Bearer ${this.accessToken}`,
      };
    }

    let response = await fetch(url, requestOptions);

    if (response.status === 401 && this.refreshToken) {
      try {
        const newAccessToken = await this.refreshAccessToken();
        requestOptions.headers = {
          ...requestOptions.headers,
          Authorization: `Bearer ${newAccessToken}`,
        };
        response = await fetch(url, requestOptions);
      } catch (error) {
        console.error('Token refresh failed:', error);
        this.clearTokens();
        throw new Error('Authentication failed');
      }
    }

    return response;
  }

  async request<T>(endpoint: string, options: RequestOptions): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const response = await this.fetchWithInterceptor(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  async get<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
    const url = new URL(`${this.baseUrl}${endpoint}`);
    if (params) {
      Object.keys(params).forEach((key) =>
        url.searchParams.append(key, params[key])
      );
    }
    return this.request<T>(url.toString(), { method: 'GET' });
  }

  async post<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async put<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'DELETE' });
  }
}

// Create and export a single instance of the Api class
export const api = new Api('https://api.example.com');



// usage

import { api } from './api';

interface LoginResponse {
  user: {
    id: string;
    username: string;
  };
  accessToken: string;
  refreshToken: string;
}

export const login = async (username: string, password: string): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>('/login', { username, password });
  api.setTokens(response.accessToken, response.refreshToken);
  return response;
};

export const logout = () => {
  api.clearTokens();
  // Additional logout logic (e.g., redirecting to login page)
};

// Example of a protected API call
export const fetchUserProfile = async () => {
  return api.get<{ id: string; username: string; email: string }>('/user/profile');
};