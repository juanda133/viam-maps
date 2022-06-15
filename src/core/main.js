import React from 'react';
import ReactStreetview from 'react-streetview';

const Streetview = props => {
  const { positionLat, positionLng, googleMapsApiKey } = props;

  const streetViewPanoramaOptions = {
    position: { lat: Number(positionLat), lng: Number(positionLng) },
    pov: { heading: 100, pitch: 0 },
    zoom: 1,
    addressControl: false,
    showRoadLabels: false,
    zoomControl: false,
    imageDateControl: true,
  };

  return (
    <ReactStreetview
      apiKey={googleMapsApiKey}
      streetViewPanoramaOptions={streetViewPanoramaOptions}
    />
  );
};

export default Streetview;
