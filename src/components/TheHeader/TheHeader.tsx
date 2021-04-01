import React from 'react'
import logo from "../../assets/images/header/header_logo.png"
import { HeaderContainer, HeaderButton, HeaderLogo } from './TheHeaderStyled'

interface HeaderProps {
    setShowModal(): void
}

function TheHeader({ setShowModal }: HeaderProps): JSX.Element {
    return (
        <HeaderContainer className="container">
            <HeaderLogo src={logo} alt="" />
            <div className="button-container">
                <HeaderButton onClick={setShowModal}>
                    Событие+
                </HeaderButton>
                <HeaderButton>
                    Обновить
                </HeaderButton>
            </div>
        </HeaderContainer>
    )
}

export default TheHeader