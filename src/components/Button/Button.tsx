import { FC } from 'react';

import { ButtonProps } from './Button.types';
import Styled from './Button.styled';

const Button: FC<ButtonProps> = ({ children, ...props }) => (
  <Styled.Button {...props}>{children}</Styled.Button>
);

export default Button;
