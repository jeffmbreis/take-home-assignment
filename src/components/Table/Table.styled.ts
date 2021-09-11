import styled from 'styled-components';

import StyledCard from '../Card/Card.styled';

const Table = styled.section`
  background-color: #30624e;
  border: 1px solid #193229;
  border-radius: 6px;
  display: flex;
  flex-flow: wrap;
  min-height: 350px;
  padding: 20px;
  width: 100%;

  ${StyledCard.Card} {
    margin: 20px;
  }
`;

const styles = {
  Table,
};

export default styles;
