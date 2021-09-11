import { FC } from 'react';

import Button from '../Button';
import TextField from '../TextField';
import Styled from './Table.styled';

const Table: FC = ({ children, ...props }) => (
  <Styled.Table {...props}>
    <Styled.TableCardsContainer>{children}</Styled.TableCardsContainer>
    <Styled.SubmitCardContainer>
      <form>
        <TextField name="card" placeholder="Card name" />
        <Button>Add</Button>
      </form>
    </Styled.SubmitCardContainer>
  </Styled.Table>
);

export default Table;
