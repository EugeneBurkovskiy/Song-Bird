import { render, screen } from '@testing-library/react';
import React from 'react';
import ProgressCircle from './ProgressCircle';

describe('ProgressCircle', () => {
  it('should render', () => {
    render(<ProgressCircle percent={50} />);
    const percent = screen.getByText('50');
    expect(percent).toBeInTheDocument();
  });
});
