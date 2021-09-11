import { FC } from 'react';

import Styled from './NewDeck.styled';
import Table from '../../components/Table';
import Card from '../../components/Card';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import FormTitle from '../../components/FormTitle';

const NewDeck: FC = (props) => (
  <>
    <Table {...props}></Table>
    <Styled.SubmitDeckContainer>
      <form>
        <FormTitle>Rotation Card</FormTitle>
        <div>
          <TextField name="card" placeholder="Card name" />
          <Button>Add</Button>
        </div>
      </form>
    </Styled.SubmitDeckContainer>
  </>
);

export default NewDeck;
