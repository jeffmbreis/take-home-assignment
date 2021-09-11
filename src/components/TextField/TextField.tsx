import { FC } from 'react';

import { TextFieldProps } from './TextField.types';
import Styled from './TextField.styled';

const TextField: FC<TextFieldProps> = (props) => (
  <Styled.TextField type="text" {...props} />
);

export default TextField;
