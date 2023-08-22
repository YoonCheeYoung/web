import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthProvider, useAuth } from '../path/to/authContext';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { authenticated } = useAuth();

  useEffect(() => {
    // If user is not authenticated and not on login page, redirect to login
    if (!authenticated && router.pathname !== '/login') {
      router.push('/login');
    }
  }, [authenticated]);

  return <Component {...pageProps} />;
}

function AppWrapper({ Component, pageProps }) {
  return (
    <AuthProvider>
      <MyApp Component={Component} pageProps={pageProps} />
    </AuthProvider>
  );
}

export default AppWrapper;
