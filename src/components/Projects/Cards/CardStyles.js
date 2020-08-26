import styled from 'styled-components';

export const CardTag = styled.a`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  height: 200px;
  background-color: ${({theme}) => theme.colors.color1};
  box-shadow: 0px 0px 87px -46px rgba(10, 132, 255, 0.5);
  border-radius: 5px;
  transition: all 0.3s;
  cursor: pointer;
  text-decoration: none;

  h3 {
    margin-bottom: 15px;
    color: ${({theme}) => theme.colors.color2};
  }

  p {
    color: ${({theme}) => theme.colors.color4};
    font-size: 0.95rem;
  }

  &:hover {
    box-shadow: none;
    transform: scale(1.05);
    border: 1px solid var(--primary-blue);
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;

    span {
      display: block;
      padding: 5px;
      font-size: 0.65rem;
      border-radius: 5px;
      color: var(--lighter-blue);
      background-color: var(--primary-blue);
      opacity: 0.5;
    }
  }

  @media (max-width: 375px) {
  }
`;
