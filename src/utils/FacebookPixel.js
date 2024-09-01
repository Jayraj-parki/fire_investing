import ReactPixel from 'react-facebook-pixel';

const pixelId = '1040661307798437'; 

export const initFacebookPixel = () => {
  ReactPixel.init(pixelId);
  ReactPixel.pageView(); 
};

export const trackCustomEvent = (eventName, eventParams) => {
  ReactPixel.trackCustom(eventName, eventParams);
};
