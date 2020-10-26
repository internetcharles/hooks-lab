import React from 'react';
import { getCharacterDetails } from '../services/xfiles-api';
import { render, screen } from '@testing-library/react';
import DetailPage from './DetailPage';

jest.mock('../services/xfiles-api.js');

describe('DetailPage component', () => {
  it('renders DetailPage', async() => {
    getCharacterDetails.mockResolvedValue([
      {
        name: "Phil",
        image: "Phil.jpg",
        description: "He's cool."
      }
    ]);

    render(<DetailPage />)

    const characterDetail = await screen.findByTestId('detail');

    expect(characterDetail).not.toBeEmptyDOMElement();
  });
});