import React from 'react';
import { shallow } from 'enzyme';
import ColorList from './ColorList';

describe('ColorList component', () => {
  it('renders a ColorList', () => {
    const wrapper = shallow(<ColorList />);
    expect(wrapper).toMatchSnapshot();
  });
});
