import React from 'react';
import { screen } from '@testing-library/react';

import render from '__tests__/utils/render';
import Loader from 'ui/Loader';

describe('<Loader />', () => {
  test('should render', () => {
    render(<Loader />);

    expect(screen.getByRole('progressbar')).toBeVisible();
  });

  test('should have proper structure', () => {
    const { asFragment } = render(<Loader />);

    expect(asFragment()).toMatchSnapshot();
  });
});
