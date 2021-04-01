interface Occasion {
    id: number,
    occasion: string,
    place: string,
    time: Date | string,
    description: string,
    important: boolean
}

interface Action {
    type: string,
    payload?: Array | Object
}