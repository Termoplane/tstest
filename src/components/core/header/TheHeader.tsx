import React, { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import logo from "../../../assets/images/header/header_logo.png"
import map from '../../../assets/images/header/map.png'
import cross from '../../../assets/images/cross.png'
import { RENEW_OCCASIONS } from "../../../store/occasions/types"
import { TextInput } from "../../ui/input/TextInput"
import { Modal } from "../../ui/modal/Modal"
import { HeaderContainer, HeaderLogo } from './TheHeaderStyled'
import styles from './TheHeader.module.scss'
import { UiButton } from "../../ui/button/Button"
import { Textarea } from "../../ui/input/Textarea"
import { Tooltip } from "../../ui/tooltip/Tooltip"
import { jsonApi } from "../../../services/api"
import { createOccasion } from "../../../store/occasions/actions"


export const TheHeader = (): JSX.Element => {
    const [showModal, setShowModal] = useState<boolean>(false)
    // const stateOccasions = useSelector((state: IApplicationState) => state.occasions)

    const [occasion, setOccasion] = useState<string>('')
    const [place, setPlace] = useState<string>('')
    const [time, setTime] = useState<string>('')
    const [description, setDescription] = useState<string>('')

    const dispatch = useDispatch();
    const placeRef = useRef<any>()

    const renewOccasions = () => {
        dispatch({type: RENEW_OCCASIONS})
    }

    const getPlace = () => {
        async function success(position: any) {
            const {longitude, latitude} = position.coords
            const location = await jsonApi.get("https://api.bigdatacloud.net/data/reverse-geocode-client", {
                params: {
                    longitude,
                    latitude,
                    localityLanguage: 'ru'
                }
            })
            placeRef.current.value = location.data.city
        }

        navigator.geolocation.getCurrentPosition(success)
    }

    const addOccasion = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(e);

        const payload = {
            occasion,
            place,
            time: new Date(time),
            description,
            important: false
        }

        dispatch(createOccasion(payload))
        setShowModal(false)
    }

    return (
        <>
            <HeaderContainer className={styles.header__container}>
                <HeaderLogo src={logo} alt="" />
                <div className="button-container">
                    <UiButton big onClick={() => setShowModal(!showModal)}>
                        Событие +
                    </UiButton>
                    <UiButton big onClick={renewOccasions}>
                        Обновить
                    </UiButton>
                </div>
                <h1 className={styles.header__heading}>
                    Друзья, мои походы пока ещё <br />
                    не закончились, делюсь с вами!
                </h1>
            </HeaderContainer>
            <Modal open={showModal} close={() => setShowModal(!showModal)}>
                <form onSubmit={addOccasion} className={styles.modal}>
                    <img src={cross} className={styles.modal__close} alt="" onClick={() => {setShowModal(false)}}/>
                    <div className={styles.inputContainer} style={{width: "555px"}}>
                        <TextInput className={styles.inputContainer__input} id="occasion" onChange={e => {setOccasion(e.target.value)}} />
                        <label className={styles.inputContainer__label} htmlFor="occasion">Событие</label>
                    </div>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <div className={styles.inputContainer} style={{width: "60%"}}>
                            <TextInput className={styles.inputContainer__input} id="place" ref={placeRef} onChange={e => {setPlace(e.target.value)}} />
                            <div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline"}}>
                                <label className={styles.inputContainer__label} htmlFor="place">Место</label>
                                <Tooltip title="Вы можете отметить ваше местоположение при помощи карты">
                                    <img src={map} alt="" className={styles.inputContainer__labelImage} onClick={getPlace}/>
                                </Tooltip>
                            </div>
                        </div>
                        <div className={styles.inputContainer} style={{width: "30%"}}>
                            <TextInput className={styles.inputContainer__input} id="time" onChange={e => {setTime(e.target.value)}} />
                            <label className={styles.inputContainer__label} htmlFor="time">Время</label>
                        </div>
                    </div>
                    <div className={styles.inputContainer} style={{marginBottom: "20px"}}>
                        <Textarea className={styles.inputContainer__input} id="description" placeholder="Описание" style={{height: "160px", maxWidth: "555px"}} onChange={e => {setDescription(e.target.value)}} />
                    </div>
                    <div className={styles.modalFooter}>
                        <div className={styles.modalFooter__input}>
                            <input type="checkbox" id="important"></input>
                            <label htmlFor="important">Пометить событие как важное</label>
                        </div>
                        <div className={styles.modalFooter__buttons}>
                            <UiButton small color="#a3a3a3">Готово</UiButton>
                            <UiButton small color="#a3a3a3">Удалить</UiButton>
                        </div>
                    </div>
                </form>
            </Modal>
        </>
    )
}
