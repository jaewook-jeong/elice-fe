import styled from '@emotion/styled';

export const Wrapper = styled.div`
  border: 1px solid rgb(225, 226, 228);
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(225, 226, 228);
  &:last-of-type {
    border-bottom: none;
  }
`;

export const Title = styled.div`
  min-width: 6rem;
  padding: 0.875rem 1rem;
  background-color: rgb(249, 250, 252);
  border-right: 1px solid rgb(225, 226, 228);
  color: #5e5f61;
  font-size: 0.75rem;
  font-weight: 700;
`;

export const FilterButtons = styled.div`
  display: flex;
  align-items: center;
`;
