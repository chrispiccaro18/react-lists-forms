import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CreateColor extends PureComponent {
  static propTypes = {
    addColor: PropTypes.func.isRequired
  }

  state = {
    colorName: '',
    color: '#FF0000'
  }

  handleSubmit = event => {
    event.preventDefault();
    const { colorName, color } = this.state;
    this.props.addColor({ colorName, hex: color });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { colorName, color } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="colorName" value={colorName} onChange={this.handleChange} />
          <input type="color" name="color" value={color} onChange={this.handleChange} />
          <button>Create Color</button>
        </form>
      </>
    );
  }
}

