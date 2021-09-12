import suitToSymbolAndColor from './suitToSymbolAndColor';
import colors from '../core/theme/colors';

test('should return the correct symbol and color', () => {
  const hearts = suitToSymbolAndColor('H');

  expect(hearts.color).toEqual(colors.card.red);
  expect(hearts.symbol).toEqual('♥');

  const diamonds = suitToSymbolAndColor('D');

  expect(diamonds.color).toEqual(colors.card.red);
  expect(diamonds.symbol).toEqual('♦');

  const clubs = suitToSymbolAndColor('C');

  expect(clubs.color).toEqual(colors.card.black);
  expect(clubs.symbol).toEqual('♣');

  const spades = suitToSymbolAndColor('S');

  expect(spades.color).toEqual(colors.card.black);
  expect(spades.symbol).toEqual('♠');
});
