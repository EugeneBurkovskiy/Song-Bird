import { render, screen } from '@testing-library/react';

import CategoryButton from './CategoryButton';

const onClickFunc = vi.fn();
describe('CategoryButton', () => {
  it('should render button', () => {
    render(<CategoryButton onClick={onClickFunc} title={'Push me'} />);

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Push me');
  });
  it('should render active button', () => {
    render(<CategoryButton onClick={onClickFunc} title={'Push me'} active={true} />);

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Push me');
    expect(/active/gi.test(button.classList[1])).toBeTruthy();
  });
});
