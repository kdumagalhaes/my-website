import styled from 'styled-components';

export const ButtonTag = styled.button`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  background-color: var(--primary-blue);
  border-radius: 5px;
  height: 50px;
  border: none;
  box-shadow: 0px 0px 15px rgba(10, 132, 255, 0.5);
  color: var(--lighter-blue);
  font-size: 1.2rem;
  font-weight: bold;
  transition: box-shadow 0.3s;

  &:hover {
      box-shadow: none;
  }
`;
