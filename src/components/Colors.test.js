import React from 'react';
import { shallow } from 'enzyme';
import Colors from './Colors';

describe('Colors component', () => {
  const colorArr = [
    { colorName: 'red', hex: '#ff0000' },
    { colorName: 'green', hex: '#00ff00' },
    { colorName: 'blue', hex: '#0000ff' }
  ];
  
  it('renders a Colors', () => {
    const wrapper = shallow(<Colors colors={colorArr} />);
    expect(wrapper).toMatchSnapshot();
  });
});
