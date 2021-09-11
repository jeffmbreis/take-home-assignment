import type CardSuit from '../../../core/types/CardSuit';
import type CardValue from '../../../core/types/CardValue';

export type Card = {
  suit: CardSuit;
  value: CardValue;
};

export type State = {
  cards: Card[];
};
