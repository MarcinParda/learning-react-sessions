# Authentication, authorization - JWT

## Authorization vs Authorization, which is which?

- Authorization - Checking what permissions user have
- Authentication - Checking if user is really the user

## JWT Authentication

### How JWT authentication looks like?

https://excalidraw.com/#json=JIUX9A-ctxuQnoNmgTdrf,-syxmbI7cSSZqts-VZzb2w

### How authentication looks like in React?

1. Manual implementation using libraries:

- Use fetch to make API calls to your authentication server.
- Store the JWT token in localStorage or httpOnly cookies.
- Create a custom AuthContext and AuthProvider to manage authentication state.
- Implement protected routes using a ProtectedRoute component.

2. Using third-party libraries:

- react-jwt: Provides hooks and utilities for JWT handling in React.
- jwt-decode: Allows decoding JWTs on the client-side.

3. Using authentication services:

- Clerk: Offers a complete authentication and user management solution, simplifying JWT implementation.
- Auth0: Provides robust authentication and authorization services for React apps.

4. Best practices:

- Use httpOnly cookies instead of localStorage for storing tokens to prevent XSS attacks.
- Implement refresh token rotation for better security.
- Use axios interceptors to automatically attach JWT tokens to requests and handle token refreshing.

(KISS) https://kentcdodds.com/blog/authentication-in-react-applications
(Simple implementation with Private route) https://dev.to/miracool/how-to-manage-user-authentication-with-react-js-3ic5

- What are best practices for authentication?

1. Keep it simple.
2. If it's complex consider using a third-party service for safety.
3. Use httpOnly cookies instead of localStorage for storing tokens to prevent XSS attacks.
4. Use short lived tokens and refresh tokens.
5. Use interceptors to attach JWT tokens to requests and handle token refreshing.
6. Notify users why they were logged out.

## Authorization

### What is a role?

A role is a set of permissions that a user has in a system.

### How to disable a button based on user role?

Go to ./examples/role-and-permissions.tsx

### What is a permission and how to avoid complex user role if statements?

Go to ./examples/role-and-permissions.tsx

For each feature with restricted access create a permission or couple of them. It will make your code more readable and maintainable.

### What if api doesn't return permissions?

BFF or mapping on frontend.