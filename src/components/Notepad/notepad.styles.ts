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

export const NotepadTitle = styled.div`
  background-color: #ffffff;
  border: 1px solid !important;
  height: 48px;
  outline: none;
  box-shadow: none;
  font-weight: normal;
  color: #333;
  font-size: 14px;
  border-radius: 5px;
  padding: 0 16px;
  margin-top: 8px;
`;
