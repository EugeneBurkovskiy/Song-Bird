import { screen, render } from '@testing-library/react';

import GalleryPage from './GalleryPage';

describe('GalleryPage', () => {
  it('should render', async () => {
    render(<GalleryPage />);
    const loading = screen.getByTestId('loading');
    expect(loading).toBeInTheDocument();
    const title = await screen.findByText('Gallery');
    expect(title).toBeInTheDocument();
  });
});
