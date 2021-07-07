import React from 'react';
import { shallow } from 'enzyme';
import PhotoAlbum from './PhotoAlbum';

describe('PhotoAlbum component', () => {
  it('renders a PhotoAlbum', () => {
    const wrapper = shallow(<PhotoAlbum title="Lauren" photos={['img-string0', 'img-string1', 'img-string2']} />);
    expect(wrapper).toMatchSnapshot();
  });
});
