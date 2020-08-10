import styled from 'styled-components';
import Illustration2 from '../../assets/illustration-2.svg';

export const ProjectsDiv = styled.div`
  width: 100%;
  height: 1000px;
  padding: var(--safe-area-padding);
`;

export const BackgroundDiv = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  max-width: 1240px;
  margin: 0 auto 40px;
  background-image: url(${Illustration2});
  background-repeat: no-repeat;

  h2 {
      align-self: flex-end;
      margin-left: auto;
      font-weight: 900;
  }
`;

export const GridDiv = styled.div `
  width: 100%;
  max-width: 1240px;
  height: 500px;
  margin: 0 auto;  
  display: grid;
  grid-template-columns: repeat(4, 295px);
  grid-template-rows: repeat(2, 200px);
  grid-gap: 20px;
`