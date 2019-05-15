import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

describe('Color component', () => {
  it('renders a Color', () => {
    const wrapper = shallow(<Color name='sky blue' rgb={{ red: 135, green: 206, blue: 235 }}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
