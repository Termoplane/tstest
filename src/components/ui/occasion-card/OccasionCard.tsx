import React from "react"
import { Occasion } from "../../../store/occasions/types"
import { createFormatter } from "../../../utils/dates/dateFormatter"
import styles from './OccasionCard.module.scss'
import cross from '../../../assets/images/cross.png'
import { useDispatch } from "react-redux"
import { deleteOccasion } from "../../../store/occasions/actions"

type Props = {
    occasion: Occasion
}

function OccasionCard({ occasion }: Props): JSX.Element {
    const formatter = createFormatter({
        hour: "2-digit",
        minute: "2-digit"
    })
    const dispatch = useDispatch()

    const occasionTime = formatter.format(new Date(occasion.time))

    console.log(occasionTime, "🤞🤞🤞");

    const occasionDelete = () => {
        dispatch(deleteOccasion(occasion))
    }
    
    return (
        <div className={styles.occasionCard}>
            <div className={styles.occasionCard__cross} onClick={occasionDelete}>
                <img src={cross} alt=""/>
            </div>
            <div className={styles.occasionCard__placeTime}>
                <h1>{occasionTime}</h1>
                <span>{occasion.place}</span>
            </div>
            <div className={styles.occasionCard__headerDesc}>
                <h2>{occasion.occasion}</h2>
                <span>{occasion.description}</span>
            </div>
        </div>
    )
}

export default OccasionCard