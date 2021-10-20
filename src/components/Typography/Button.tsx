import React, { FC } from 'react';
import { Button as AntButton, ButtonProps as AntdButtonProps } from 'antd';

import { ButtonProps } from 'types/components';

import Wrapper from './Button.style';

export const Button: FC<ButtonProps | AntdButtonProps> = (props) => {
  const {
    size = 'medium',
    type = 'primary',
    shape = 'fill',
    ...restProps
  } = props;
  return (
    <Wrapper
      as={AntButton}
      custome_shape={shape}
      custome_size={size}
      custome_type={type}
      {...restProps}
    >
      {props.children}
    </Wrapper>
  );
};
