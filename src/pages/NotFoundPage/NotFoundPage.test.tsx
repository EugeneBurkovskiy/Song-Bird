import { screen, render } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';
import { BrowserRouter } from 'react-router-dom';

describe('NotFound', () => {
  it('should render', async () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );
    const code = screen.getByText('404');
    expect(code).toBeInTheDocument();

    setTimeout(() => {
      expect(code).not.toBeInTheDocument();
      const start = screen.findByText('Start');
      expect(start).toBeInTheDocument();
    }, 2000);
  });
});
