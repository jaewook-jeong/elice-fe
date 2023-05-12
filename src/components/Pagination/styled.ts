import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;

export const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 4px;
`;

export const Page = styled.button<{ $isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  text-align: center;
  width: 24px;
  height: 24px;
  color: #999;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  ${({ $isSelected }) =>
    $isSelected &&
    css`
      background-color: #524fa1;
      color: white;
    `}
`;

export const Arrow = styled.button<{ $disabled: boolean }>`
  color: ${({ $disabled }) => ($disabled ? '#ccc' : '#222')};
  border: none;
  cursor: pointer;
`;
