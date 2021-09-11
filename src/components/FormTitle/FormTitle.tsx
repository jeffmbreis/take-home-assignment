import { FC } from 'react';

import Styled from './FormTitle.styled';

const FormTitle: FC = ({ children, ...props }) => (
  <Styled.FormTitle {...props}>{children}</Styled.FormTitle>
);

export default FormTitle;
