import React from 'react';
import { render } from '@testing-library/react';
import Characters from './Characters';

describe('ListPage', () => {
  it('renders ListPage', () => {
    const { asFragment } = render(<Characters
      characters={[
        { 
          name: "John",
          image: "John.jpg",
          occupation: "Guy",
        }
      ]}  
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});