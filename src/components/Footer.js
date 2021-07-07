import React from 'react';
import PropTypes from 'prop-types';

function Footer({ title }) {
  return (
    <footer>
      <h2>{title}</h2>
    </footer>
  );
}

Footer.propTypes = {
  title: PropTypes.string.isRequired
};

export default Footer;
