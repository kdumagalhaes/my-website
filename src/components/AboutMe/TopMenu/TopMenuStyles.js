import styled from 'styled-components';

export const TopNav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding-top: 30px;
`;

export const TopNavUl = styled.ul`
  li {
    display: inline-block;
    margin-right: 35px;

    &:last-child {
      margin-right: 0;
    }

    a {
      color: var(--lighter-blue);
      text-decoration: none;
      font-size: 1.1rem;
      transition: color 0.3s;

      &:hover {
        color: var(--light-blue);
      }

      @media (max-width: 900px) {
        color: var(--dark-gray);
      }
    }
  }

  @media (max-width: 375px) {
    display: none;
  }
`;
