import React from 'react';
import PropTypes from 'prop-types';
import Color from './Color';

function Colors({ colors }) {
  const colorsLis = colors.map(({ colorName, hex }) => (
    <li key={`${colorName}${hex}`}>
      <Color colorName={colorName} hex={hex} />
    </li>
  ));

  return (
    <ul>
      {colorsLis}
    </ul>
  );
}

Colors.propTypes = {
  colors: PropTypes.array.isRequired
};

export default Colors;
