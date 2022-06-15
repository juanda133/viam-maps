import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import MapStreetview from '../src/index';
import './locales/i18n';
import './styles/style.scss';

const AppTest = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MapStreetview
        positionLat="4.7474369"
        positionLng="-74.1048802"
        googleMapsApiKey="AIzaSyA4bN_JLbgMsrsaspEm1ebHDiTNNvE7DTA"
      />
    </Suspense>
  );
};

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <AppTest />
  </Suspense>,

  document.getElementById('app')
);
