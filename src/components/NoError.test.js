import React from 'react';
import { shallow } from 'enzyme';
import NoError from './NoError';

describe('NoError component', () => {
  it('renders NoError component', () => {
    const wrapper = shallow(<NoError />);
    expect(wrapper).toMatchSnapshot();
  });
});
