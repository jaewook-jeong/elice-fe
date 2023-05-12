import styled from '@emotion/styled';

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;
  margin-top: 16px;

  @media (max-width: 1279.98px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 767.98px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
