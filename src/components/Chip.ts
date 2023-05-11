import styled from '@emotion/styled';

const Chip = styled.button<{ $selected: boolean }>`
  margin: 0 8px;
  display: inline-flex;
  align-items: center;
  transition: all 150ms ease-in-out 0s;
  cursor: pointer;
  padding: 0.25rem 0.75rem;
  min-width: 1.875rem;
  height: 1.875rem;
  border-radius: 1.875rem;
  font-size: 0.875rem;
  border: 1px solid;

  color: ${({ $selected }) => ($selected ? 'rgb(255, 255, 255)' : 'rgb(94, 95, 97)')};
  background: ${({ $selected }) => ($selected ? 'rgb(82, 79, 161)' : 'rgb(240, 241, 243)')};
  border-color: ${({ $selected }) => ($selected ? 'rgb(82, 79, 161);' : 'rgb(240, 241, 243)')};

  :hover {
    color: ${({ $selected }) => ($selected ? 'rgb(240, 241, 243)' : 'rgb(0, 0, 0)')};
    background: ${({ $selected }) => ($selected ? 'rgb(66, 63, 140)' : 'rgb(225, 226, 228)')};
    border-color: ${({ $selected }) => ($selected ? 'rgb(66, 63, 140)' : 'rgb(225, 226, 228)')};
  }
`;

export default Chip;
