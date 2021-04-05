import  { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchOccasions } from "../../../store/occasions/actions"
import { Occasion } from "../../../store/occasions/types"
import { IApplicationState } from "../../../store/store"
import { MainProps } from "./typings"

export const TheMain = (props: MainProps) =>  {
    const dispatch = useDispatch();

    const occasions = useSelector((state: IApplicationState) => state.occasions)

    useEffect(() => {
        dispatch(fetchOccasions())
    }, [dispatch])
    
    return (
        <div>
            <div>occasions</div>
            <div>{occasions && occasions.map(
                (item: Occasion) => <div key={item.id}>{item.occasion}</div>
            )}</div>
        </div>
    )
}