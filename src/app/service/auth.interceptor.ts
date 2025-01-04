import { HttpInterceptorFn } from '@angular/common/http';

// Utility function to get a specific cookie value
function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
}

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Intercepting HTTP request:', req.url);

  const protectedRoutes = ['/company','/company/jobs'];
  const isProtectedRoute = protectedRoutes.some((route) =>
    req.url.includes(route)
  );

  if (isProtectedRoute) {
    const token = getCookie('token'); // Get token from cookie
    console.log('token is : ',token);
    
    if (token) {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('JWT token attached to protected route from cookies');
      return next(authReq);
    } else {
      console.warn('No JWT token found in cookies for protected route');
      // Optionally, handle unauthenticated access here
    }
  }

  return next(req);
};
