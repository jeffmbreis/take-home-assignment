const validateCard = (card: string) => {
  const cardInfo = card.toUpperCase().split('');
  const values = [
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
  ];
  const suits = ['H', 'D', 'C', 'S'];

  return (
    card.length > 1 &&
    values.includes(cardInfo[0]) &&
    suits.includes(cardInfo[1])
  );
};

export default validateCard;
