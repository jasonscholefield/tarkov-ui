import React from 'react';
import theme from '../theme';
import styled from 'styled-components';
import Search from '../components/icons/Search';
import Close from '../components/icons/Close';

const ItemModalContainer = styled.div`
  background-color: ${theme.colors.black};
  width: 600px;
  height: auto;
  display: flex;
  flex-direction: column;
  background: #2c2d27;
  border: 1px solid ${theme.colors.grey};
`;

const ItemModalTopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ItemModalTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'Bender Regular', 'Segoe UI', 'Helvetica Neue', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  color: ${theme.colors.white};
`;

const itemModal = ({ title }) => {
  return (
    <ItemModalContainer>
      <ItemModalTopBar>
        <ItemModalTitle>
          <Search size={12} />
          {title}
        </ItemModalTitle>
        <Close />
      </ItemModalTopBar>
    </ItemModalContainer>
  );
};

export default itemModal;
