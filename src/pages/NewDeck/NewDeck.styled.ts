import styled from 'styled-components';

const SubmitDeckContainer = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding: 20px 0;

  form {
    display: flex;
    flex-direction: column;

    div {
      align-items: flex-end;
      display: flex;
    }

    button {
      margin-left: 20px;
    }
  }
`;

const styles = {
  SubmitDeckContainer,
};

export default styles;
