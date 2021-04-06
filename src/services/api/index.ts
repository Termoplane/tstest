import axios from 'axios'

export const jsonApi = axios.create({
    headers: {
        'Content-Type': 'application/json'
    }
})
