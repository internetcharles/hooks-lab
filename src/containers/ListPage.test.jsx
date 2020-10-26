import React from 'react';
import { render, screen } from '@testing-library/react';
import { getCharacters } from '../services/xfiles-api';
import ListPage from './ListPage';

jest.mock('../services/xfiles-api.js');

describe('ListPage component', () => {
  it('renders ListPage', async() => {
    getCharacters.mockResolvedValue([
      {
        name: "Phil",
        image: "Phil.jpg",
        occupation: "Man",
        status: "Dead"
      }
    ]);

    render(<ListPage />);

    const characterList = await screen.findByTestId('list');

    expect(characterList).not.toBeEmptyDOMElement();
  })
})