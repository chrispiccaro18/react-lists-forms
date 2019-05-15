import React from 'react';
import PropTypes from 'prop-types';
import hexToRgb from '../services/hexToRgb';

function Color({ colorName, hex }) {
  const rgb = hexToRgb(hex);

  const colorStyle = {
    display: 'inline-block',
    backgroundColor: hex,
    width: '0.8em',
    height: '0.8em'
  };

  return (
    <dl>
      <dt>Name</dt>
      <dd>{colorName || hex} <div style={colorStyle}></div></dd>

      <dt>Hex</dt>
      <dd>{hex}</dd>

      <dt>RGB</dt>
      <dd>
        <p>Red - {rgb.red}</p>
        <p>Green - {rgb.green}</p>
        <p>Blue - {rgb.blue}</p>
      </dd>
    </dl>
  );
}

Color.propTypes = {
  colorName: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired
};

export default Color;
