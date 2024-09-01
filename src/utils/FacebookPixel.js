// utils/facebookPixel.js

import ReactPixel from 'react-facebook-pixel';

const pixelId = '1040661307798437'; // Replace with your Facebook Pixel ID

export const initFacebookPixel = () => {
    if (typeof window !== 'undefined') { // Ensure it's in the browser
        ReactPixel.init(pixelId);
        ReactPixel.pageView(); // To track page views
      }
};

export const trackCustomEvent = (eventName, eventParams) => {
    if (typeof window !== 'undefined') { // Ensure it's in the browser
        ReactPixel.trackCustom(eventName, eventParams);
      }
};
