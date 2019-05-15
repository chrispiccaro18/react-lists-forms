import React, { PureComponent } from 'react';
import Colors from '../components/Colors';
import CreateColor from '../components/CreateColor';

export default class ColorList extends PureComponent {
  state = {
    colors: []
  }

  addColor = color => {
    this.setState(state => (
      { colors: [...state.colors, color] }
    ));
  }

  render() {
    const { colors } = this.state;
    return (
      <>
        <CreateColor addColor={this.addColor}/>
        <Colors colors={colors}/>
      </>
    );
  }
}
