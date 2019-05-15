import React from 'react';
import PropTypes from 'prop-types';

function Photo({ photo }) {
  return (
    <img src={photo} alt={`image of ${photo}`}></img>
  );
}

Photo.propTypes = {
  photo: PropTypes.string.isRequired
};

export default Photo;
