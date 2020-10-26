import React from 'react';
import { render } from '@testing-library/react';
import Character from './Character';

describe('Character component', () => {
  it('renders a character', () => {
    const { asFragment } = render(<Character 
      name="Phil"
      image="phil.jpg"
      occupation="Farmer"
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});