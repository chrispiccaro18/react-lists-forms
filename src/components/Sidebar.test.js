import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from './Sidebar';

describe('Sidebar component', () => {
  it('renders a Sidebar', () => {
    const wrapper = shallow(
      <Sidebar>
        <p>Testing</p>
      </Sidebar>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
