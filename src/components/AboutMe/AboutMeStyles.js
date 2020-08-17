import styled from 'styled-components';
import Illustration1 from '../../assets/illustration-1.svg';
import Illustration1Mobile from '../../assets/illustration-1-mobile.svg';

export const AboutMeDiv = styled.div`
  width: 100%;
  height: 935px;
  padding: var(--safe-area-padding);
  background-image: url(${Illustration1});
  background-repeat: no-repeat;
  background-position-x: 550px;
  background-position-y: -380px;

  @media (max-width: 375px) {
    background-image: url(${Illustration1Mobile});
    background-size: 250px;
    background-position: center;
    background-position-y: 60px;
    background-color: var(--primary-blue);
    height: 780px;
  }
`;
