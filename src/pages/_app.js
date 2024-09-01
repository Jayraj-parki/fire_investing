import { useEffect } from 'react';
import { useRouter } from 'next/router';

import 'bootstrap/dist/css/bootstrap.min.css'
import { initFacebookPixel } from '@/utils/FacebookPixel';
export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    initFacebookPixel(); // Initialize Facebook Pixel

    // const handleRouteChange = () => {
    //   window.fbq('track', 'PageView'); // Track page views
    // };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return <Component {...pageProps} />;
}
