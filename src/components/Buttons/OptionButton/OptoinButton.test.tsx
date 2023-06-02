import { render, screen } from '@testing-library/react';

import OptionButton from './OptionButton';

describe('OptionButton', () => {
  it('should render', () => {
    render(<OptionButton title="Push me" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
  it('should be false', () => {
    render(<OptionButton status={false} />);
    const button = screen.getByRole('button');
    expect(/false/gi.test(button.classList[1])).toBeTruthy();
  });
  it('should be true', () => {
    render(<OptionButton status={true} />);
    const button = screen.getByRole('button');
    expect(/true/gi.test(button.classList[1])).toBeTruthy();
  });
});
