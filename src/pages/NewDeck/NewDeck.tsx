import { FC } from 'react';

import Table from '../../components/Table';
import Card from '../../components/Card';

const NewDeck: FC = () => (
  <Table>
    <Card value="2" suit="H" />
    <Card value="J" suit="C" />
    <Card value="4" suit="D" />
    <Card value="K" suit="S" />
    <Card value="10" suit="H" />
    <Card value="9" suit="H" />
  </Table>
);

export default NewDeck;
