import { render, screen } from '@testing-library/react';
import React from 'react';
import Card from './Card';

describe('Card', () => {
  it('should render', () => {
    render(<Card>Hello world</Card>);
    const card = screen.getByText('Hello world');
    expect(card).toBeInTheDocument();
  });
});
