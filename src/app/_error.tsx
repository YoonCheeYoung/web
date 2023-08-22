'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = /* Implement your authentication check here */;

    // If user is not authenticated and not on login page, redirect to login
    if (!isAuthenticated && router.pathname !== '/login') {
      router.push('/login');
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
