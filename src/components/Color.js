import React from 'react';
import PropTypes from 'prop-types';

function Color({ name, rgb }) {
  const hex = '#' + rgb.red.toString(16).toUpperCase().padStart(2, 0) + rgb.green.toString(16).toUpperCase().padStart(2, 0) + rgb.blue.toString(16).toUpperCase().padStart(2, 0);
  
  const colorPreview = {
    backgroundColor: hex,
    display: 'inline-block',
    width: '0.8em',
    height: '0.8em'
  };

  return (<dl>
    <dt>Name</dt>
    <dd>
      {name ? name : hex}
      <div style={colorPreview}></div>
    </dd>

    <dt>Hex</dt>
    <dd>{hex}</dd>

    <dt>RGB</dt>
    <dd>Red - {rgb.red}</dd>
    <dd>Green - {rgb.green}</dd>
    <dd>Blue - {rgb.blue}</dd>
  </dl>
  );
}

Color.propTypes = {
  name: PropTypes.string,
  rgb: PropTypes.object.isRequired
};

export default Color;
