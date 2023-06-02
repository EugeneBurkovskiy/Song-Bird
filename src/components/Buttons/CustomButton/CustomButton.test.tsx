import { render, screen } from '@testing-library/react';

import CustomButton from './CustomButton';

describe('CustomButton', () => {
  it('should render', () => {
    render(<CustomButton />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
  it('should be disabled', () => {
    render(<CustomButton disable={true} />);
    const button = screen.getByRole('button');
    expect(/disable/gi.test(button.classList[1])).toBeTruthy();
  });
});
