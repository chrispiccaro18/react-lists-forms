import React, { PureComponent } from 'react';

export default class TextFormatter extends PureComponent {
  state = {
    text: '',
    color: '#000000'
  }

  handleTextChange = ({ target }) => {
    this.setState({ text: target.value });
  }

  render() {
    const { text } = this.state;
    return (
      <>
        <input type="text" name="text" value={text} onChange={this.handleTextChange} />
        <p>{text}</p>
      </>
    );
  }
}
