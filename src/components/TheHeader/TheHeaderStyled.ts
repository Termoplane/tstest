import styled from 'styled-components'
import img from "../../assets/images/header/header_background.png"

export const HeaderButton = styled.button`
    padding: 20px 40px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 6px;
    box-shadow: 0px 0px 0px 3px #a9d85f;
    background: transparent;
    border: none;
    color: #ffffff;
    margin-right: 30px;
    &:hover {
        background: #a9d85f;
        cursor: pointer;
    }
`

export const HeaderLogo = styled.img`
    width: 170px;
    height: auto;
    margin-bottom: 132px;
`

export const HeaderContainer = styled.div`
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
`