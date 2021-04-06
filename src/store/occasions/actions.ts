import { UPDATE_OCCASIONS, FETCH_OCCASIONS, RENEW_OCCASIONS, Occasion, CREATE_OCCASION, ADD_OCCASION } from "./types"

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

export const addOccasion = (occasion: Occasion) => ({
    type: ADD_OCCASION,
    payload: occasion
})

export const createOccasion = (occasion: Occasion) => ({
    type: CREATE_OCCASION,
    payload: occasion
})