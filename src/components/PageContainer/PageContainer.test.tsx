import { render, screen } from '@testing-library/react';
import React from 'react';
import PageContainer from './PageContainer';

describe('PageContainer', () => {
  it('should render', () => {
    render(<PageContainer title="new page">Hello</PageContainer>);
    const window = screen.getByText('Hello');
    const title = screen.getByRole('heading');
    expect(window).toBeInTheDocument();
    expect(title).toHaveTextContent('new page');
  });
});
