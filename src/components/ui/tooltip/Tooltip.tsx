import { useState } from "react"

import styles from './Tooltip.module.scss'

interface Props {
    title?: string;
    children: JSX.Element
}

const Tooltip = ({ title, children }: Props) => {

    const [show, setShow] = useState(false)

    const showTip = () => {
        setTimeout(() => {
            setShow(true)
        }, 300)
    }

    const hideTip = () => {
        setTimeout(() => {
            setShow(false)
        })
    }

    return (
        <div 
            className={styles['tooltip-wrapper']}
            onMouseEnter={showTip}
            onMouseLeave={hideTip}
        >
            {children}
            {show && <div className={styles.tooltip}>
                {title}
            </div>}
        </div>
    )
}

export { Tooltip }