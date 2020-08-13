import styled from 'styled-components';

export const ButtonTag = styled.button`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  background-color: var(--lighter-blue);
  border-radius: 5px;
  height: 50px;
  border: none;
  box-shadow: 0px 0px 55px rgba(10, 132, 255, 0.3);
  color: var(--primary-blue);
  font-size: 1.2rem;
  font-weight: bold;
  transition: all 0.3s;
  margin: ${({margin}) => margin};

  &:hover {
    box-shadow: 0px 0px 15px rgba(10, 132, 255, 0.5);
    background-color: var(--primary-blue);
    color: var(--lighter-blue);
  }
`;
