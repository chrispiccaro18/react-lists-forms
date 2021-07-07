import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

describe('Color component', () => {
  it('renders a Color', () => {
    const wrapper = shallow(<Color colorName={'red'} hex={'#ff0000'} />);
    expect(wrapper).toMatchSnapshot();
  });
});
