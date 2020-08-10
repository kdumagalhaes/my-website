import styled from 'styled-components';

export const CardTag = styled.a`
padding: 20px;
  width: 100%;
  height: 100%;
  background-color: var(--lighter-blue);
  box-shadow: 0px 0px 87px -46px rgba(10, 132, 255, 0.5);
  border-radius: 5px;
  transition: all 0.3s;
  cursor: pointer;
  text-decoration: none;

  h3 {
    margin-bottom: 15px;
    color: var(--primary-blue);
  }

  p {
    color: var(--dark-gray);
    font-size: 0.95rem;
  }

  &:hover {
    box-shadow: none;
    transform: scale(1.05);
    border: 1px solid var(--primary-blue);
  }
`;
