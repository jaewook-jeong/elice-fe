import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 12px 0;
  border: 1px solid rgb(201, 202, 204);
  border-radius: 4px;
`;

export const IconBox = styled.div`
  margin: 0 16px;
  flex: 0;
  align-self: center;
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 12px 0;
  font-size: 14px;
  ::placeholder {
    color: gray;
  }
`;
