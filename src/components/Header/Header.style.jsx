import styled from 'styled-components'

export const HeaderStyled = styled.div `

    height: 10vh;
    background-color: #151515;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

`

export const ItensStyled = styled.ul `

    font-size: 16px;
    font-family: 'Open sans';
    
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 20px;
    margin-right: 100px;

    & a {
        color: #FFF;
    }

    & a:hover {
        color: #8647ad;
    }
    
`

