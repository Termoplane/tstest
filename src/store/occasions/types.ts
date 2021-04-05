export const FETCH_OCCASIONS = "FETCH_OCCASIONS"
export const CREATE_OCCASION = "CREATE_OCCASION"
export const UPDATE_OCCASIONS = "UPDATE_OCCASIONS"
export const CLEAR_OCCASIONS = "CLEAR_OCCASIONS"
export const RENEW_OCCASIONS = "RENEW_OCCASIONS"

export interface Occasion {
    id: number,
    occasion: string,
    place: string,
    time: Date | string,
    description: string,
    important: boolean
}