import { render, screen } from '@testing-library/react';

import Container from './Container';

describe('Container', () => {
  it('should render', () => {
    render(<Container>Hello</Container>);
    const container = screen.getByText('Hello');
    expect(container).toBeInTheDocument();
  });
});
