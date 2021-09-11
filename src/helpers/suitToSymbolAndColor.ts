import CardSuit from '../core/types/CardSuit';

const COLOR_RED = '#EB4042';
const COLOR_BLACK = '#000000';

const suitToSymbolAndColor = (
  suit: CardSuit,
): { symbol: string; color: string } => {
  switch (suit) {
    case 'H':
      return { symbol: '♥', color: COLOR_RED };
    case 'D':
      return { symbol: '♦', color: COLOR_RED };
    case 'S':
      return { symbol: '♠', color: COLOR_BLACK };
    case 'C':
      return { symbol: '♣', color: COLOR_BLACK };
    default:
      return { symbol: 'None', color: COLOR_BLACK };
  }
};

export default suitToSymbolAndColor;
