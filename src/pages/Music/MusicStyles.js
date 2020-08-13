import styled from 'styled-components';

export const MusicDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto 40px;
  padding: var(--safe-area-padding);

  h1 {
    text-align: center;
    margin-top: 50px;

    a {
      text-decoration: none;
      font-weight: bold;
      color: var(--primary-blue);

      &:hover {
        color: var(--light-blue);
      }
    }
  }
`;

export const StreamButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;
