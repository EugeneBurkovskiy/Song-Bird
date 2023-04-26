import { screen, render } from '@testing-library/react';
import React from 'react';
import Score from './Score';
import { BirdsContext } from '../../context/BirdsContext';
import { mockContext } from '../../../test/mocks/mocks';

describe('Score', () => {
  it('should render score table', () => {
    render(
      <BirdsContext.Provider value={mockContext}>
        <Score />
      </BirdsContext.Provider>
    );
    const title = screen.getByRole('heading');
    const mode = screen.getByText(mockContext.score[0].mode);
    expect(title).toHaveTextContent('Score');
    expect(mode).toBeInTheDocument();
  });
  it('should render error', () => {
    render(
      <BirdsContext.Provider value={{ ...mockContext, score: [] }}>
        <Score />
      </BirdsContext.Provider>
    );
    const title = screen.getByRole('heading');
    const error = screen.getByText('Play at least one game to see your stats');
    expect(title).toHaveTextContent('Score');
    expect(error).toBeInTheDocument();
  });
});
