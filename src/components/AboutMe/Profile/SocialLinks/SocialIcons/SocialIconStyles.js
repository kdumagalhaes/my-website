import styled from 'styled-components'

export const SocialIconLi = styled.li `
display: inline-block;
margin-right: 10px;
a {
    color: var(--primary-blue);
    transition: color 0.3s;

    &:hover {
        color: var(--light-blue);
    }

    path {
        padding-left: -20px;
    }

}
`