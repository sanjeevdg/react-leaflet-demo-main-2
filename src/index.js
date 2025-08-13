import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppVector from './AppVector';
import AppRaster from './AppRaster';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const useVectorTiles = false;

if (useVectorTiles) {
  root.render(

      <AppVector />

  );
} else {
  root.render(

      <AppRaster />
  
  );
}

//  </React.StrictMode>     <React.StrictMode>     </React.StrictMode>  <React.StrictMode>


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
