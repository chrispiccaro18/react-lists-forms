import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundary from './ErrorBoundary';
import YesError from './YesError';

describe('ErrorBoundary component', () => {
  it('renders ErrorBoundary component', () => {
    const wrapper = shallow(
      <ErrorBoundary>
        <YesError />
      </ErrorBoundary>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
