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
      // In a real scenario, the server would set the HTTP-only cookie
      // Here, we're simulating it on the client-side
      Cookies.set('auth_token', token, {
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

export const fetchProtectedData = async (): Promise<string> => {
  // Mock API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const token = Cookies.get('auth_token');
      if (token === 'mock_jwt_token') {
        resolve('Protected data fetched successfully');
      } else {
        reject(new Error('Unauthorized'));
      }
    }, 500);
  });
};

export const getAuthToken = (): string | undefined => {
  return Cookies.get('auth_token');
};

export const validateToken = async (
  token: string | undefined
): Promise<boolean> => {
  // Mock token validation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(token === 'mock_jwt_token');
    }, 100);
  });
};
