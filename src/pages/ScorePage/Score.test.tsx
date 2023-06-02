import { screen, render } from '@testing-library/react';

import Score from './ScorePage';
import { BirdsContext } from '../../context/BirdsContext';
import { mockContext } from '../../../test/mocks/mocks';

describe('Score', () => {
  it('should render score table', () => {
    render(
      <BirdsContext.Provider value={mockContext}>
        <Score />
      </BirdsContext.Provider>
    );
    const title = screen.getAllByText('Score');
    const mode = screen.getByText(mockContext.score[0].mode);
    expect(title).toHaveLength(2);
    expect(mode).toBeInTheDocument();
  });
  it('should render error', () => {
    render(
      <BirdsContext.Provider value={{ ...mockContext, score: [] }}>
        <Score />
      </BirdsContext.Provider>
    );
    const title = screen.getAllByText('Score');
    const error = screen.getByText('Play at least one game to see your stats');
    expect(title).toHaveLength(1);
    expect(error).toBeInTheDocument();
  });
});
