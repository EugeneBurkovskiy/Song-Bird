import { render, screen } from '@testing-library/react';
import AudioPlayer from './AudioPlayer';
import userEvent from '@testing-library/user-event';

import { mockAudio } from '../../../test/mocks/mocks';
describe('AudioPlayer', () => {
  it('should play and pause', async () => {
    render(<AudioPlayer audioUrl={mockAudio} />);
    const user = userEvent.setup();
    const play = screen.getByTestId('play');
    expect(play).toBeInTheDocument();

    user.click(play);
    const pause = await screen.findByTestId('pause');
    expect(pause).toBeInTheDocument();
  });
  it('should sound and mute', async () => {
    render(<AudioPlayer audioUrl={mockAudio} />);
    const user = userEvent.setup();
    const sound = screen.getByTestId('sound');
    expect(sound).toBeInTheDocument();
    user.click(sound);
    const mute = await screen.findByTestId('mute');
    expect(mute).toBeInTheDocument();
  });
});
