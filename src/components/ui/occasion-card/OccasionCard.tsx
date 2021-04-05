import React from "react"
import styles from './OccasionCard.module.scss'

function OccasionCard({ occasion }: any): JSX.Element {
    const occasionTime = new Date(occasion.time).getHours() + ":" + new Date(occasion.time).getMinutes()

    return (
        <div className={styles.occasionCard}>
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