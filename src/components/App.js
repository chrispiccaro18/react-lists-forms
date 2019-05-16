import React from 'react';
import ErrorBoundary from './ErrorBoundary.js';
import YesError from './YesError';
import NoError from './NoError';

export default function App() {
  return (
    <>
      <ErrorBoundary>
        <YesError />
      </ErrorBoundary>
      <ErrorBoundary>
        <NoError />
      </ErrorBoundary>
    </>
  );
}
