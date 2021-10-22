import styled from 'styled-components';

export const AddButton = styled.div`
  direction: ltr;
  border-radius: 8px;
  border: 2px solid;
  line-height: 0;
  border-color: ${({ theme }) => theme.colors.green};
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  padding: 15px 20px;
  height: 48px !important;
`;
