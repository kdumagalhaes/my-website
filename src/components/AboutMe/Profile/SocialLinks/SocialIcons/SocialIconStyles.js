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
}

@media (max-width: 411px) {
    a {
        color: var(--lighter-blue);
    }
}
`