import React from "react"
import ReactDOM from "react-dom"
import { ModalContainer, ModalWindow } from "./ModalStyled"

interface ModalProps {
    children: JSX.Element,
    close: () => void,
    open: boolean,
    className?: any
}

export const Modal = ({open, close, children}: ModalProps) => {

    const closeModal = (e: React.SyntheticEvent<HTMLElement>) => {
        // Make onclickoutside hook
        if (e.target === e.currentTarget) {
            close()
        }
    }

    if (!open) return null

    return ReactDOM.createPortal(
        <ModalContainer onClick={closeModal}>
            <ModalWindow>
                { children }
            </ModalWindow>
        </ModalContainer>
        ,
        document.getElementById("modal") as Element
    )
}