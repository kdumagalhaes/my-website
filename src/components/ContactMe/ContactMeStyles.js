import styled from 'styled-components';
import Illustration3 from '../../assets/illustration-3.svg';

export const ContactMeDiv = styled.div`
  width: 100%;
  height: 800px;
  padding: var(--safe-area-padding);
  background-image: url(${Illustration3});
  background-repeat: no-repeat;
  background-position-x: -480px;

  @media (max-width: 375px) {
    background-image: none;
    background-color: var(--primary-blue);
    height: 100%;
    padding-bottom: 60px;
    padding-top: 60px
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    height: 400px;
    max-width: 1240px;
    margin: 0 auto 40px;
    position: relative;
    top: 225px;

    @media (max-width: 375px) {
      position: static;
      align-items: flex-start;

      h2 {
        color: var(--lighter-blue);
      }
    }

    h2 {
      margin-left: auto;
      margin-bottom: 40px;
      font-weight: 900;
    }
  }

  @media (max-width: 375px) {
  }
`;
