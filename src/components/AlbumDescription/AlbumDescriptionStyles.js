import styled from 'styled-components';

export const AlbumDescriptionDiv = styled.div`
  display: flex;
  background-color: var(--primary-blue);
  padding: 20px;
  width: 100%;
  max-width: 600px;
  margin: 60px auto;
  height: auto;

  img {
    width: 200px;
    margin-right: 20px;
  }

  p {
      line-height: 22px;
      color: var(--lighter-blue);
  }

  @media (max-width: 375px) {
    flex-direction: column;

    img {
      width: 100%;
      margin-bottom: 20px;
    }
  }
`;
