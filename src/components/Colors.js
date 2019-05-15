import React from 'react';
import PropTypes from 'prop-types';
import Color from './Color';

function Colors({ colors }) {
  const colorsLis = colors.map(({ name, rgb }) => (
    <li key={`${name}`}>
      <Color name={name} rgb={rgb}/>
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
