import styled from 'styled-components';

import StyledCard from '../Card/Card.styled';
import colors from '../../core/theme/colors';

const Table = styled.section`
  background-color: #16644d;
  border: 1px solid #0f3328;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 350px;
  padding: 20px;
  width: calc(100% - 40px);

  ${StyledCard.Card} {
    margin: 20px;
  }
`;

const TableCardsContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  width: 100%;
`;

const SubmitCardContainer = styled.div`
  display: flex;
  margin: 20px;

  form {
    display: flex;

    input {
      border-radius: 4px 0 0 4px;
    }

    button {
      border: 1px solid ${colors.button.default};
      border-radius: 0 4px 4px 0;
      padding: 0 24px;
      width: auto;
    }
  }
`;

const styles = {
  SubmitCardContainer,
  Table,
  TableCardsContainer,
};

export default styles;
