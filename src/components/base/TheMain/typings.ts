import { Occasion } from "../../../store/occasions/types";

export interface MainProps {
    fetchOccasions?: () => void, 
    occasions?: Occasion[],
}