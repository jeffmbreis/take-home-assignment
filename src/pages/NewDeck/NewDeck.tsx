import { FC, useState, ChangeEvent, SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { BASE_URL } from '../../core/constants';
import Styled from './NewDeck.styled';
import validateCard from '../../helpers/validateCard';
import Table from '../../components/Table';
import Card from '../../components/Card';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import FormTitle from '../../components/FormTitle';
import { RootState } from '../../core/redux/store';

const NewDeck: FC = (props) => {
  const history = useHistory();
  const { cards } = useSelector((state: RootState) => state.deck);
  const [inputRotationCardValue, setInputRotationCardValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputRotationCardValue(e.currentTarget.value);
  };

  const handleSubmit = async () => {
    if (validateCard(inputRotationCardValue)) {
      const cardArray = cards.map((card) => `${card.value}${card.suit}`);
      const cardList = cardArray.join(',');

      const deck1Id = await axios
        .get(`${BASE_URL}/api/deck/new/?cards=${cardList}`)
        .then(function (deckResponse) {
          return deckResponse.data.deck_id;
        });

      const pileHandResponse = await axios
        .get(`${BASE_URL}/api/deck/${deck1Id}/pile/hand/add/?cards=${cardList}`)
        .then(function (pileResponse) {
          console.log('pileResponse', pileResponse.data);
          return pileResponse.data.deck_id;
        });

      const deck2Id = await axios
        .get(`${BASE_URL}/api/deck/new/?cards=${inputRotationCardValue}`)
        .then(function (deckResponse) {
          return deckResponse.data.deck_id;
        });

      const pileRotateResponse = await axios
        .get(
          `${BASE_URL}/api/deck/${deck2Id}/pile/rotation/add?cards=${inputRotationCardValue}`,
        )
        .then(function (pileResponse) {
          return pileResponse.data.deck_id;
        });

      history.push(`/deck/${pileHandResponse}-${pileRotateResponse}`);
    }
  };

  return (
    <>
      <Table canAdd={true} {...props}>
        {cards.map((card, key) => (
          <Card key={key} suit={card.suit} value={card.value} />
        ))}
      </Table>
      <Styled.SubmitDeckContainer>
        <form
          onSubmit={(e: SyntheticEvent) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <FormTitle>Rotation Card</FormTitle>
          <div>
            <TextField
              onChange={handleChange}
              name="card"
              placeholder="Card name"
            />
            <Button>Submit deck</Button>
          </div>
        </form>
      </Styled.SubmitDeckContainer>
    </>
  );
};

export default NewDeck;
