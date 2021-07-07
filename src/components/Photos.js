import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';

function Photos({ photos }) {
  const photosLis = photos.map(photo => (
    <li key={photo}>
      <Photo photo={photo} />
    </li>
  ));

  return (
    <ul>
      {photosLis}
    </ul>
  );
}

Photos.propTypes = {
  photos: PropTypes.array.isRequired
};

export default Photos;
