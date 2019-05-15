import React from 'react';
import { shallow } from 'enzyme';
import Photo from './Photo';

describe('Photo component', () => {
  it('renders a Photo', () => {
    const wrapper = shallow(<Photo photo="img-string" />);
    expect(wrapper).toMatchSnapshot();
  });
});
