import { FC, SyntheticEvent, ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../core/redux/store';
import { addCard } from '../../core/modules/deck/deckStore';
import CardSuit from '../../core/types/CardSuit';
import CardValue from '../../core/types/CardValue';
import Button from '../Button';
import TextField from '../TextField';
import FormTitle from '../FormTitle';
import validateCard from '../../helpers/validateCard';
import Styled from './Table.styled';

const Table: FC<TableProps> = ({ children, canAdd, ...props }) => {
  const { cards } = useSelector((state: RootState) => state.deck);
  const dispatch = useDispatch();
  const [inputCardValue, setInputCardValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputCardValue(e.currentTarget.value);
  };

  const handleSubmit = () => {
    if (validateCard(inputCardValue) && cards.length < 10) {
      const cardInfo = inputCardValue.toUpperCase().split('');

      dispatch(
        addCard({
          value: cardInfo[0] as CardValue,
          suit: cardInfo[1] as CardSuit,
        }),
      );
    }
  };

  return (
    <Styled.Table {...props}>
      <Styled.TableCardsContainer>{children}</Styled.TableCardsContainer>
      <Styled.SubmitCardContainer>
        <FormTitle>Add cards to the pile</FormTitle>
        <form
          onSubmit={(e: SyntheticEvent) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <TextField
            value={inputCardValue}
            name="card"
            placeholder="Card name"
            onChange={handleChange}
            maxLength={2}
          />
          <Button>Add</Button>
        </form>
      </Styled.SubmitCardContainer>
    </Styled.Table>
  );
};

export default Table;
