import Cookies from 'js-cookie';

interface LoginResponse {
  user: {
    id: string;
    username: string;
  };
}

export const login = async (
  username: string,
  password: string
): Promise<LoginResponse> => {
  // Mock API call
  return new Promise((resolve) => {
    setTimeout(() => {
      const token = 'mock_jwt_token';
      const refreshToken = 'mock_refresh_token';
      // In a real scenario, the server would set the HTTP-only cookie
      // Here, we're simulating it on the client-side
      Cookies.set('auth_token', token, {
        expires: 1 / 24,
        secure: true,
        sameSite: 'strict',
      });
      Cookies.set('refresh_token', refreshToken, {
        expires: 7,
        secure: true,
        sameSite: 'strict',
      });
      resolve({
        user: {
          id: '1',
          username,
        },
      });
    }, 500);
  });
};

export const logout = (): void => {
  Cookies.remove('auth_token');
};

export const refreshAuthToken = async (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const refreshToken = Cookies.get('refresh_token');
      if (refreshToken == 'mock_refresh_token') {
        // Below code should be here if we would validate the refresh token
      }
      const token = 'mock_jwt_token';
      Cookies.set('auth_token', token, {
        expires: 1 / 24,
        secure: true,
        sameSite: 'strict',
      });
      resolve(token);
    }, 500);
  });
};

export const fetchUser = async (): Promise<string> => {
  // Mock API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const token = Cookies.get('auth_token');
      if (token === 'mock_jwt_token') {
        resolve(JSON.stringify({ id: '42', username: 'user' }));
      } else {
        reject(new Error('Unauthorized'));
      }
    }, 300);
  });
};

export const fetchProtectedData = async (): Promise<string> => {
  // Mock API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const token = Cookies.get('auth_token');
      if (token === 'mock_jwt_token_expired') {
        reject(new Error('Token expired'));
      }
      if (token === 'mock_jwt_token') {
        resolve(JSON.stringify({ data: 'Secret data' }));
      } else {
        reject(new Error('Unauthorized'));
      }
    }, 300);
  });
};

export const getAuthToken = (): string | undefined => {
  return Cookies.get('auth_token');
};

export const getRefreshToken = (): string | undefined => {
  return Cookies.get('refresh_token');
};

export const validateToken = async (
  token: string | undefined
): Promise<boolean> => {
  // Mock token validation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(token === 'mock_jwt_token');
    }, 500);
  });
};
