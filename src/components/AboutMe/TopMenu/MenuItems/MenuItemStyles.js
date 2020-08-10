import styled from 'styled-components';

export const MenuItemLi = styled.li`
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 400;

  &:last-child {
    margin-right: 0;
  }

  a {
    text-decoration: none;
    color: ${({ fontColor }) => fontColor};
    transition: color 0.3s;
  margin-right: 20px;


    &:hover {
      color: var(--light-blue)
    }
  }
`;
