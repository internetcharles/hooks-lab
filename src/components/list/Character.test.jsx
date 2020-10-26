import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Character from './Character';

describe('Character component', () => {
  it('renders a character', () => {
    const { asFragment } = render(<Character 
      name="Phil"
      occupation="Farmer"
      status="Dead"
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});