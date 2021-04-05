import { useState } from "react"
import { useDispatch } from "react-redux"
import logo from "../../../assets/images/header/header_logo.png"
import { RENEW_OCCASIONS } from "../../../store/occasions/types"
import { TextInput } from "../../ui/input/TextInput"
import { Modal } from "../../ui/modal/Modal"
import { HeaderContainer, HeaderLogo } from './TheHeaderStyled'
import styles from './TheHeader.module.scss'
import { UiButton } from "../../ui/button/Button"
import { Textarea } from "../../ui/input/Textarea"


export const TheHeader = (): JSX.Element => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const dispatch = useDispatch();

    const renewOccasions = () => {
        dispatch({type: RENEW_OCCASIONS})
    }

    return (
        <>
            <HeaderContainer className="container">
                <HeaderLogo src={logo} alt="" />
                <div className="button-container">
                    <UiButton big onClick={() => setShowModal(!showModal)}>
                        Событие +
                    </UiButton>
                    <UiButton big onClick={renewOccasions}>
                        Обновить
                    </UiButton>
                </div>
            </HeaderContainer>
            <Modal open={showModal} close={() => setShowModal(!showModal)}>
                <form>
                    <div className={styles.inputContainer} style={{width: "555px"}}>
                        <TextInput className={styles.inputContainer__input} id="occasion" />
                        <label className={styles.inputContainer__label} htmlFor="occasion">Событие</label>
                    </div>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <div className={styles.inputContainer} style={{width: "60%"}}>
                            <TextInput className={styles.inputContainer__input} id="occasion" />
                            <label className={styles.inputContainer__label} htmlFor="occasion">Место</label>
                        </div>
                        <div className={styles.inputContainer} style={{width: "30%"}}>
                            <TextInput className={styles.inputContainer__input} id="occasion" />
                            <label className={styles.inputContainer__label} htmlFor="occasion">Время</label>
                        </div>
                    </div>
                    <div className={styles.inputContainer}>
                        <Textarea className={styles.inputContainer__input} id="occasion" placeholder="Описание" />
                    </div>
                </form>
            </Modal>
        </>
    )
}