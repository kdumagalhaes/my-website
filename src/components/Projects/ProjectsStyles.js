import styled from 'styled-components';
import Illustration2 from '../../assets/illustration-2.svg';

export const ProjectsDiv = styled.div`
  width: 100%;
  height: 1000px;
  padding: var(--safe-area-padding);

  @media (max-width: 1024px) {
    height: 1400px;
  }

  @media (max-width: 411px) {
    height: 100%;
    margin-bottom: 80px;
  }
`;

export const BackgroundDiv = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  max-width: 1240px;
  margin: 0 auto 40px;
  background-image: url(${Illustration2});
  background-repeat: no-repeat;

  @media (max-width: 411px) {
    background-position: center;
    background-position-y: 50px;
    background-size: 300px;
    height: 330px;
  }

  h2 {
    align-self: flex-end;
    margin-left: auto;
    font-weight: 900;
  }
`;

export const GridDiv = styled.div`
  width: 100%;
  max-width: 1240px;
  height: 500px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 200px);
  grid-gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 411px) {
    height: auto;
    grid-template-columns: auto;
    grid-template-rows: repeat(8, 200px);
    grid-row-gap: 20px;
  }
`;
