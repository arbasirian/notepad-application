import styled from 'styled-components';

export const Container = styled.div`
  width: 1024px;
  margin: 0 auto;
  direction: ${(props) => (props.theme.language === 'fa' ? 'rtl' : 'ltr')};

  @media screen and (max-width: ${(props) => props.theme.breakpoints.xxl}) {
    width: 1024px;
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoints.xl}) {
    width: 80%;
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoints.l}) {
    width: 90%;
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoints.m}) {
    width: 90%;
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoints.xs}) {
    width: 100%;
  }
`;
