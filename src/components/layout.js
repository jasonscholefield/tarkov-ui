import React from 'react';
import theme from '../theme';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.black3};
  background-size: cover;
  background-position: center;

  ${(props) => {
    if (props.variant === 'hideout') {
      return `
        background-image: ${"url('https://i.imgur.com/bAhHIdS.png')"};
    `;
    } else {
      return `
        background-image: ${"url('https://i.imgur.com/DANju0O.png')"};
    `;
    }
  }}
`;

const Layout = ({ children, variant }) => <Container variant={variant}>{children}</Container>;

export default Layout;
