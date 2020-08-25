import styled from 'styled-components';
import Illustration3 from '../../assets/illustration-3.svg';

export const ContactMeDiv = styled.div`
  width: 100%;
  height: 600px;
  padding: var(--safe-area-padding);
  background-image: url(${Illustration3});
  background-repeat: no-repeat;
  background-position-x: -480px;

  h2 {
    margin-left: auto;
    margin-bottom: 40px;
    font-weight: 900;
  }

  @media (max-width: 1024px) {
    background-position-x: -580px;
  }

  @media (max-width: 768px) {
    background-size: 600px;
    background-position-x: -320px;
  }

  @media (max-width: 375px) {
    background-image: none;
    background-color: var(--primary-blue);
    height: 100%;
    padding-bottom: 60px;
    padding-top: 60px;
  }
`;

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  height: 400px;
  max-width: 1240px;
  margin: 0 auto 40px;

  @media (max-width: 375px) {
    h2 {
      color: var(--lighter-blue);
    }
  }
`;
