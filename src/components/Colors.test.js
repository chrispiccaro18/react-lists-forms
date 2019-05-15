import React from 'react';
import { shallow } from 'enzyme';
import Colors from './Colors';

describe('Colors component', () => {
  const colorArr = [
    { name: 'sky blue', rgb: { red: 135, green: 206, blue: 235 } },
    { name: 'sky blue', rgb: { red: 135, green: 206, blue: 235 } },
    { name: 'sky blue', rgb: { red: 135, green: 206, blue: 235 } }
  ];
  
  it('renders a Colors', () => {
    const wrapper = shallow(<Colors colors={colorArr}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
