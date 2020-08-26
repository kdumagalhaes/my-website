import styled from 'styled-components';

export const LogoH1 = styled.h1`
  font-size: 1.2rem;
  font-weight: 900;
  color: ${({theme}) => theme.colors.color4};

  @media (max-width: 375px) {
    display: none;
  }
`;
