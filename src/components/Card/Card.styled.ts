import styled from 'styled-components';
import CardSuit from '../../core/types/CardSuit';
import suitToSymbolAndColor from '../../helpers/suitToSymbolAndColor';

const Card = styled.div<{ suit: CardSuit }>`
  align-items: center;
  background-color: #fff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  height: 220px;
  justify-content: space-between;
  padding: 10px 14px;
  width: 140px;

  p {
    color: ${({ suit }) => suitToSymbolAndColor(suit)};
  }
`;

const CardText = styled.p`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: 'Inconsolata', monospace;
  font-size: 32px;
  margin: 0;

  span {
    line-height: 28px;
  }
`;

const TopCardText = styled(CardText)`
  align-self: flex-start;
`;

const BottomCardText = styled(CardText)`
  align-self: flex-end;
  transform: rotate(180deg);
`;

const CenterSymbol = styled(CardText)`
  font-size: 50px;
`;

const styles = {
  BottomCardText,
  Card,
  CenterSymbol,
  TopCardText,
};

export default styles;
