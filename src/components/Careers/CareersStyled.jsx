import styled from 'styled-components'

export const ContentStyled = styled.div `

    display: none;
    position: absolute;
    background-color: #110f1b;
    cursor: pointer;

    & p {
        padding: 15px;
        color: #FFF;
    }

    & p:hover {
        background-color: #221e38;
        color: #8647ad;
    }
`

export const CareerStyled = styled.div `

    width: 300px;
`

export const MenuStyled = styled.div `
    
    position: relative;
    display: inline-block;
    margin-top: 20px;
    
    &:hover ${ContentStyled} {

        display: block;
    }
`

export const BtnStyled = styled.p `

    color: #ffffff;
    margin-bottom: 20px;
    
    &:hover {
        color: #8647ad;
        cursor: pointer;
    }
`
