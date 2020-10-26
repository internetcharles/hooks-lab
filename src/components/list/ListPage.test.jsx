import React from 'react';
import { render } from '@testing-library/react';
import ListPage from './ListPage';

describe('ListPage', () => {
  it('renders ListPage', () => {
    const { asFragment } = render(<ListPage
      characters={[
        { 
          name: "John",
          occupation: "Guy",
          status: "Alive"
        }
      ]}  
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});