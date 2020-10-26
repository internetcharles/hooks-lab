import React from 'react';
import { render } from '@testing-library/react';
import CharacterDetail from './CharacterDetail';

describe('CharacterDetail component', () => {
  it('renders character', () => {
    const { asFragment } = render(<CharacterDetail 
    name="John"
    image="john.jpg"
    description="John is great."
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});