import { dynamicLineClamp } from '@/styles/dynamicLineClamp';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: 338px;
  padding: 28px 24px;
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Label = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: #524fa1;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #222;
  line-height: 1.6;
  ${dynamicLineClamp(2)};
  height: 60px;
`;

export const Description = styled.div`
  font-size: 14px;
  color: #5e5f61;
  line-height: 1.6;
  ${dynamicLineClamp(2)};
  height: 45px;
`;

export const IconLogoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const IconBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IconRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 8px;
  font-size: 12px;
  color: #7d7e80;
`;

export const IconText = styled.div``;
