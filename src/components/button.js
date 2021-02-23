import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import theme from '../theme';

const ButtonWrapper = styled.button`
  font-family: 'Bender Regular', 'Segoe UI', 'Helvetica Neue', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: bold;
  font-size: 32px;
  cursor: pointer;
  appearance: none;
  user-select: none;
  background-color: transparent;
  border: 0;
  padding: 0;
  width: auto;
  min-width: 100px;
  display: inline-block;
  border-radius: 4px;
  border-width: 2px;
  border-style: solid;
  padding: 12px 24px;
  line-height: 1.25;
  text-decoration: none;
  text-align: center;
  white-space: nowrap;
  transition: border-color 150ms ease, background-color 150ms ease, color 150ms ease;

  &.primary {
    background-color: ${theme.colors.green};
    color: white;
    border-color: ${theme.colors.green};
  }

  &.outline {
    background-color: transparent;
    color: ${theme.colors.gold};
    border-color: ${theme.colors.gold};
  }

  &.clear {
    background-color: transparent;
    color: ${theme.colors.gold};
    border-color: transparent;
  }

  &.icon {
    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;

    & > * + * {
      margin-left: ${theme.spacing.u1}px;
    }

    svg {
      fill: currentcolor;
    }
  }
`;

const Button = ({ onClick, children, type, primary, outline, clear, icon }) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      type={type ? type : 'button'}
      className={cn({ primary: primary, outline: outline, clear: clear, icon: icon })}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
