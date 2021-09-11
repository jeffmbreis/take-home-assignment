import styled from 'styled-components';

import colors from '../../core/theme/colors';

const Button = styled.button`
  align-items: center;
  background-color: ${colors.button.default};
  border: 1px solid #ffffff;
  border-radius: 4px;
  color: ${colors.button.text};
  cursor: pointer;
  display: flex;
  height: 40px;
  justify-content: center;
  width: 180px;

  &:hover {
    background-color: ${colors.button.hover};
  }
`;

const styles = { Button };

export default styles;
