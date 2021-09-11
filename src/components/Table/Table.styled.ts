import styled from 'styled-components';

import StyledCard from '../Card/Card.styled';

const Table = styled.section`
  background-color: #16644d;
  border: 1px solid #0f3328;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  min-height: 350px;
  padding: 20px;
  width: 100%;

  ${StyledCard.Card} {
    margin: 20px;
  }
`;

const TableCardsContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  width: 100%;
`;

const SubmitCardContainer = styled.div``;

const styles = {
  SubmitCardContainer,
  Table,
  TableCardsContainer,
};

export default styles;
