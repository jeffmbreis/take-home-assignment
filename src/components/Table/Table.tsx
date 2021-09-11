import { FC } from 'react';

import Styled from './Table.styled';

const Table: FC = ({ children, ...props }) => (
  <Styled.Table {...props}>{children}</Styled.Table>
);

export default Table;
