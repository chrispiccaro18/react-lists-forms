import React from 'react';
import PropTypes from 'prop-types';
import Color from './Color';

function Colors({ colors }) {
  const colorsLis = colors.map(({ name, hex }) => (
    <li key={`${name}${hex}`}>
      <Color name={name} hex={hex} />
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
