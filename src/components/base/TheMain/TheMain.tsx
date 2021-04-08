import  { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchOccasions } from "../../../store/occasions/actions"
import { Occasion } from "../../../store/occasions/types"
import { IApplicationState } from "../../../store/store"
import OccasionCard from "../../ui/occasion-card/OccasionCard"
import { Spinner } from "../../ui/spinner/Spinner"
import { MainProps } from "./typings"

export const TheMain = (props: MainProps) =>  {
    const dispatch = useDispatch();

    const occasions = useSelector((state: IApplicationState) => state.occasions)

    const occasionList = occasions.map((occasion: Occasion) => {
        return <OccasionCard key={occasion['_id']} occasion={occasion} />
    })

    useEffect(() => {
        dispatch(fetchOccasions())
    }, [dispatch])

    return (
        <div>
            {occasions.length ? occasionList : <Spinner />}
        </div>
    )
}