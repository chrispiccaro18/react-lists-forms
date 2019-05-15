import React from 'react';
import { shallow } from 'enzyme';
import Photos from './Photos';

describe('Photos component', () => {
  it('renders a Photos', () => {
    const wrapper = shallow(<Photos photos={['img-string0', 'img-string1', 'img-string2']} />);
    expect(wrapper).toMatchSnapshot();
  });
});

