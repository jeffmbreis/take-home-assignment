import { FC } from 'react';

import suitToSymbolAndColor from '../../helpers/suitToSymbolAndColor';
import Styled from './Card.styled';
import { Card as CardProps } from '../../core/modules/deck/deckTypes';

const Card: FC<CardProps> = ({ value, suit, ...props }) => (
  <Styled.Card suit={suit} {...props}>
    <Styled.TopCardText>
      {value}
      <span>{suitToSymbolAndColor(suit).symbol}</span>
    </Styled.TopCardText>
    <Styled.CenterSymbol>
      {suitToSymbolAndColor(suit).symbol}
    </Styled.CenterSymbol>
    <Styled.BottomCardText>
      {value}
      <span>{suitToSymbolAndColor(suit).symbol}</span>
    </Styled.BottomCardText>
  </Styled.Card>
);

export default Card;
