import React from 'react';
import { shallow } from 'enzyme';
import CreateColor from './CreateColor';

describe('CreateColor component', () => {
  const mockAddColor = jest.fn(x => 42 + x);
  
  it('renders a CreateColor', () => {
    const wrapper = shallow(<CreateColor addColor={mockAddColor} />);
    expect(wrapper).toMatchSnapshot();
  });
});
