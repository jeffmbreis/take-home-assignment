import CardSuit from '../core/types/CardSuit';
import colors from '../core/theme/colors';

const suitToSymbolAndColor = (
  suit: CardSuit,
): { symbol: string; color: string } => {
  switch (suit) {
    case 'H':
      return { symbol: '♥', color: colors.card.red };
    case 'D':
      return { symbol: '♦', color: colors.card.red };
    case 'S':
      return { symbol: '♠', color: colors.card.black };
    case 'C':
      return { symbol: '♣', color: colors.card.black };
    default:
      return { symbol: 'none', color: colors.card.black };
  }
};

export default suitToSymbolAndColor;
