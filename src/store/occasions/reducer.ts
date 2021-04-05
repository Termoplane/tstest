import { CLEAR_OCCASIONS, Occasion, UPDATE_OCCASIONS } from "./types";

const initialState: Occasion[] = [
    {
        id: 0,
        occasion: "Поездка",
        place: "Марокко",
        time: new Date(),
        description: "Отдохнули, полепили, поварили, покурили",
        important: true
    }
]

export const occasionReducer = (state = initialState, action: Action) => {
    console.log(action.type);
    
    switch (action.type) {
        case CLEAR_OCCASIONS:
            return []
        case UPDATE_OCCASIONS:
            return [
                ...state,
                ...action.payload
            ]
        default:
            return state
    }
}