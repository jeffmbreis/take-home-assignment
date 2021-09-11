import { FC } from 'react';

import Styled from './Button.styled';

const Button: FC = ({ children, ...props }) => (
  <Styled.Button {...props}>{children}</Styled.Button>
);

export default Button;
