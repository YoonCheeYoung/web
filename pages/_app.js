// pages/_app.js
'use client'
import { ChakraProvider } from '@chakra-ui/react'

// dashboard css import
import '../styles/dashboard.css';
import "../styles/showcsv.css";
// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

export const logout = () => {
  localStorage.removeItem('token');
};

export const theme = extendTheme({ colors })

// 3. Pass the `theme` prop to the `ChakraProvider`
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
    const handleBeforeUnload = () => {
      logout(); // Call the logout function
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
    };
  }, [] );


  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp