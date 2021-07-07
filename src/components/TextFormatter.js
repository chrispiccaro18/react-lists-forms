import React, { PureComponent } from 'react';
import figlet from 'figlet';

export default class TextFormatter extends PureComponent {
  state = {
    text: '',
    color: '#000000',
    font: 'Banner',
    formattedFont: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
      this.figletText();
    });
  }

  figletText = () => {
    const { text, font } = this.state;
    figlet.text(text, { font: font }, (err, result) => {
      if(err) {
        // eslint-disable-next-line no-console
        console.log(err);
        return;
      }
      this.setState({ formattedFont: result });
    });
  }

  render() {
    const { text, color, formattedFont, font } = this.state;
    const pTextStyle = {
      color: color
    };
    const figletOptions = ['Alpha', 'Avatar', 'Banner', 'Alligator', 'Linux'].map(font => (
      <option key={font} value={font}>{font}</option>
    ));

    return (
      <>
        <input type="text" name="text" value={text} onChange={this.handleChange} />
        <select name="font" value={font} onChange={this.handleChange}>{figletOptions}</select>
        <input type="color" name="color" value={color} onChange={this.handleChange} />
        <pre style={pTextStyle}>{formattedFont}</pre>
      </>
    );
  }
}
