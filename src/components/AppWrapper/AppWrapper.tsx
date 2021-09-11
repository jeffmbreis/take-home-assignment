import { FC } from 'react';

import Styled from './AppWrapper.styled';

const AppWrapper: FC = ({ children, ...props }) => (
  <Styled.AppWrapper {...props}>
    <Styled.Content>
      <Styled.Title>Deck of cards</Styled.Title>
      {children}
    </Styled.Content>
  </Styled.AppWrapper>
);

export default AppWrapper;
