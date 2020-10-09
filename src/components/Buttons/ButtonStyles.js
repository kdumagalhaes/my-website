import styled from 'styled-components';

export const ButtonTag = styled.button`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 5px;
  height: 50px;
  border: none;
  box-shadow: 0px 4px 0px 0px rgba(10, 132, 255, 0.5);
  color: ${({ textColor }) => textColor};
  font-size: 1.2rem;
  font-weight: bold;
  margin: ${({ margin }) => margin};
  transform: translateY();
  transition: box-shadow 0.2s, transform 0.2s;

  &:hover {
    box-shadow: none;
    transform: translateY(4px);
    background-color: var(--primary-blue);
    color: var(--lighter-blue);
  }

  @media (max-width: 411px) {
    background-color: var(--lighter-blue);
    color: var(--primary-blue);
  }
`;
