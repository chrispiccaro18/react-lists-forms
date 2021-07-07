import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer component', () => {
  it('renders a Footer', () => {
    const wrapper = shallow(<Footer title="Lauren" />);
    expect(wrapper).toMatchSnapshot();
  });
});
