import React, { PureComponent } from 'react';

export default class TextFormatter extends PureComponent {
  state = {
    text: '',
    color: '#000000'
  }

  handleTextChange = ({ target }) => {
    this.setState({ text: target.value });
  }
  
  handleColorChange = ({ target }) => {
    this.setState({ color: target.value });
  }

  render() {
    const { text, color } = this.state;
    const pTextStyle = {
      color: color
    };
    return (
      <>
        <input type="text" name="text" value={text} onChange={this.handleTextChange} />
        <input type="color" name="color" value={color} onChange={this.handleColorChange} />
        <p style={pTextStyle}>{text}</p>
      </>
    );
  }
}
