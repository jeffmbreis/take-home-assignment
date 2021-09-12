import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Table from '../../components/Table';
import { BASE_URL } from '../../core/constants';

const Deck: FC = () => {
  const { deckId }: { deckId: string } = useParams();
  const splitedDecksIds = deckId.split('-');

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/deck/${splitedDecksIds[0]}/pile/hand/list/`)
      .then(function (response) {
        console.log(response.data);
      });
    axios
      .get(`${BASE_URL}/api/deck/${splitedDecksIds[1]}/pile/rotation/list/`)
      .then(function (response) {
        console.log(response.data);
      });
  }, [splitedDecksIds]);

  return <Table></Table>;
};

export default Deck;
