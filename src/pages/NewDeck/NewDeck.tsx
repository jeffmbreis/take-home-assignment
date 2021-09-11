import { FC } from 'react';

import Table from '../../components/Table';
import Card from '../../components/Card';

const NewDeck: FC = (props) => (
  <Table {...props}>
    <Card value="2" suit="H" />
    <Card value="J" suit="C" />
  </Table>
);

export default NewDeck;
