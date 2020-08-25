import styled from 'styled-components';

export const NameAndRoleDiv = styled.div`
  width: 100%;

  h1 {
    font-size: 2.2rem;
    font-weight: 900;
  }

  span {
    font-size: 1.6rem;
    color: var(--light-gray);
    display: block;
    margin: 0 0 10px 0;
  }

  p {
    width: 100%;
    max-width: 360px;
    font-size: 0.9rem;
    margin-bottom: 20px;
    line-height: 23px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.7rem;
    }

    p {
      max-width: 300px;
    }

    span {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 375px) {
    margin-top: 320px;

    h1,
    p {
      color: var(--lighter-blue);
    }

    h1 {
      font-size: 2.2rem;
    }
  }
`;
