import { render, screen } from '@testing-library/react';

import ModalWindow from './ModalWindow';
import userEvent from '@testing-library/user-event';

describe('ModalWindow', () => {
  const root = document.createElement('div');
  root.id = 'overlay-root';
  document.body.append(root);
  it('should render', () => {
    render(<ModalWindow>Hello</ModalWindow>);
    const window = screen.getByText('Hello');
    expect(window).toBeInTheDocument();
  });
  it('should render with controls', () => {
    render(<ModalWindow controls={true}>Hello</ModalWindow>);
    const cross = screen.getByText('×');
    expect(cross).toBeInTheDocument();
  });
  it('should render null', () => {
    render(<ModalWindow show={false}>Hello</ModalWindow>);
    const window = screen.queryByText('Hello');
    expect(window).not.toBeInTheDocument();
  });
  it('should close by click on cross', async () => {
    const user = userEvent.setup();
    const setShow = vi.fn();
    render(
      <ModalWindow setShow={setShow} show={true}>
        Hello
      </ModalWindow>
    );
    const cross = screen.getByText('×');

    await user.click(cross);

    expect(setShow).toHaveBeenCalledWith(false);
  });
  it('should close by click on overlay', async () => {
    const user = userEvent.setup();
    const setShow = vi.fn();
    render(
      <ModalWindow setShow={setShow} show={true}>
        Hello
      </ModalWindow>
    );
    const cross = document.querySelector('section') as HTMLElement;

    await user.click(cross);

    expect(setShow).toHaveBeenCalledWith(false);
  });
});
