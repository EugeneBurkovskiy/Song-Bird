import { render, screen } from '@testing-library/react';
import React from 'react';
import BirdCard from './BirdCard';
import { mockBirds } from '../../../test/mocks/mocks';

const [bird] = mockBirds;
describe('BirdCard', () => {
  it('should render mystery card', () => {
    render(<BirdCard bird={bird} hide={true} />);

    const title = screen.getByRole('heading');
    const question = screen.getByText('?');
    const cover = screen.queryByText('Select an option to see details');

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('***');
    expect(question).toBeInTheDocument();
    expect(cover).not.toBeInTheDocument();
  });
  it('should render short info BirdCard', () => {
    render(<BirdCard bird={bird} />);

    const title = screen.getByRole('heading');
    const question = screen.queryByText('?');
    const cover = screen.queryByText('Select an option to see details');

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(bird.name);
    expect(question).not.toBeInTheDocument();
    expect(cover).not.toBeInTheDocument();
  });
  it('should render details BirdCard', () => {
    render(<BirdCard bird={bird} details={true} />);

    const species = screen.getByText(bird.species);
    expect(species).toBeInTheDocument();
  });
  it('should render covered BirdCard', () => {
    render(<BirdCard bird={bird} details={true} cover={true} />);

    const cover = screen.getByText('Select an option to see details');
    expect(cover).toBeInTheDocument();
  });
});
