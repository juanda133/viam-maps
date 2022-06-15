import React from 'react';
import PropTypes from 'prop-types';
import MainT from './core/main';

const MapStreetview = props => {
  const { positionLat, positionLng, googleMapsApiKey } = props;

  return (
    <MainT
      positionLat={positionLat}
      positionLng={positionLng}
      googleMapsApiKey={googleMapsApiKey}
    />
  );
};

MapStreetview.propTypes = {
  positionLat: PropTypes.string.isRequired,
  positionLng: PropTypes.string.isRequired,
  googleMapsApiKey: PropTypes.string.isRequired,
};

export default MapStreetview;
