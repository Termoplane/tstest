export const FETCH_OCCASIONS = "FETCH_OCCASIONS"
export const CREATE_OCCASION = "CREATE_OCCASION"
export const UPDATE_OCCASIONS = "UPDATE_OCCASIONS"


export const updateOccasions = (payload: Occasion[]) => ({
    type: UPDATE_OCCASIONS,
    payload
})