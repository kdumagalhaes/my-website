import styled from 'styled-components'

export const CardDiv = styled.div `
width: 100%;
height: 100%;
background-color: var(--lighter-blue);
box-shadow: 0px 0px 87px -46px rgba(10,132,255,0.5);
border-radius: 5px;
transition: all 0.3s;

&:hover {
    box-shadow: none;
    transform: scale(1.05);
    border: 1px solid var(--primary-blue);
}
`