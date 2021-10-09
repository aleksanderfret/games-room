import React, { forwardRef, useState } from 'react';

import Loader from 'ui/Loader';
import Button from './Button';
import { AsyncContentBox } from './StyledButtons';
import { ButtonProps } from './types';

const AsyncButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      danger,
      loading: sourceLoading,
      onClick,
      secondary,
      size = 'medium',
      ...rest
    },
    ref
  ) => {
    const [loading, setLoading] = useState(false);
    const finalLoading = loading || sourceLoading;
    const loaderColor = secondary && !danger ? 'main' : 'contrast';
    const loaderSize = size === 'small' ? 'sm' : 'md';

    const handleClick = async (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      if (finalLoading || !onClick) {
        return;
      }

      setLoading(true);

      try {
        await onClick(event);
      } finally {
        setLoading(false);
      }
    };

    return (
      <Button
        danger={danger}
        loading={finalLoading}
        onClick={handleClick}
        ref={ref}
        secondary={secondary}
        size={size}
        {...rest}
      >
        {finalLoading && <Loader color={loaderColor} size={loaderSize} />}
        <AsyncContentBox loading={finalLoading}>{children}</AsyncContentBox>
      </Button>
    );
  }
);

AsyncButton.displayName = 'AsyncButton';
export default AsyncButton;
