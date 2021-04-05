import { UPDATE_OCCASIONS, FETCH_OCCASIONS, RENEW_OCCASIONS, Occasion } from "./types"

export const updateOccasions = (payload: Occasion[]) => ({
    type: UPDATE_OCCASIONS,
    payload
})

export const fetchOccasions = () => ({
    type: FETCH_OCCASIONS
})

export const renewOccasions = () => ({
    type: RENEW_OCCASIONS
})