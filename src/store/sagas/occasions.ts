import { FETCH_OCCASIONS, updateOccasions } from "../actions/occasionsActions"
import { takeEvery, put, call } from "redux-saga/effects"
import axios from "axios"

function getOccasions() {
    return axios.get("https://run.mocky.io/v3/0028aaa7-a2b3-4c3c-96ed-bdb631ade721", {
        headers: {
            'Content-Type': 'application/json'
        },
    })
}

function* workerFetchOccasions() {
    const response: {
        data: Occasion[]
    } = yield call(getOccasions);
    console.log(response, "😊😊😊");
    
    yield put(updateOccasions(response.data))
}

export default function* watcherFetchOccasions() {
    console.log("Enter watcher");
    
    yield takeEvery(FETCH_OCCASIONS, workerFetchOccasions)
}