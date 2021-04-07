import { addOccasion, updateOccasions } from "./actions"
import { takeEvery, put, call } from "redux-saga/effects"
import { jsonApi } from '../../services/api/index'
import { CLEAR_OCCASIONS, CREATE_OCCASION, FETCH_OCCASIONS, Occasion, RENEW_OCCASIONS } from "./types";

const OCCASION_API = "http://localhost:3001/occasions"

function* workerFetchOccasions() {
    const response: {
        data: Occasion[]
    } = yield call(() => jsonApi.get<Occasion[]>(OCCASION_API));
    
    yield put(updateOccasions(response.data))
}

function* workerRenewOccasions() {
    yield put({type: CLEAR_OCCASIONS})

    const response: {
        data: Occasion[]
    } = yield call(() => jsonApi.get<Occasion[]>(OCCASION_API));
    
    yield put(updateOccasions(response.data))
}

function* workerCreateOccasion(action: Action) {
    yield call(
        () => jsonApi.post(OCCASION_API, {
            ...action.payload
        })
    )
    yield put(addOccasion(action.payload))
}

export default function* watcherFetchOccasions() {    
    yield takeEvery(FETCH_OCCASIONS, workerFetchOccasions)
    yield takeEvery(RENEW_OCCASIONS, workerRenewOccasions)
    yield takeEvery(CREATE_OCCASION, workerCreateOccasion)
}
