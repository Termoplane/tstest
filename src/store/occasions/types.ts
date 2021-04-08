export const FETCH_OCCASIONS = "FETCH_OCCASIONS"
export const CREATE_OCCASION = "CREATE_OCCASION"
export const UPDATE_OCCASIONS = "UPDATE_OCCASIONS"
export const CLEAR_OCCASIONS = "CLEAR_OCCASIONS"
export const RENEW_OCCASIONS = "RENEW_OCCASIONS"
export const ADD_OCCASION = "ADD_OCCASION"
export const DELETE_OCCASION = "DELETE_OCCASION"

export interface Occasion {
    _id?: string,
    occasion: string,
    place: string,
    time: Date | string,
    description: string,
    important: boolean
}