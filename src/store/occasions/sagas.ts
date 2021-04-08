import { updateOccasions } from "./actions"
import { takeEvery, put, call } from "redux-saga/effects"
import { jsonApi } from '../../services/api/index'
import { CLEAR_OCCASIONS, CREATE_OCCASION, DELETE_OCCASION, FETCH_OCCASIONS, Occasion, RENEW_OCCASIONS } from "./types";

const OCCASION_API = "http://localhost:3001/occasions"

function* workerFetchOccasions() {
    const response: {data: Occasion[]} = yield call(() => jsonApi.get<Occasion[]>(OCCASION_API));
    
    yield put(updateOccasions(response.data))
}

function* workerRenewOccasions() {
    yield put({type: CLEAR_OCCASIONS})

    const response: { data: Occasion[] } = yield call(() => jsonApi.get<Occasion[]>(OCCASION_API));
    
    yield put(updateOccasions(response.data))
}

function* workerCreateOccasion(action: Action) {
    const response: {data: Occasion[]} = yield call(() => jsonApi.post(OCCASION_API, {...action.payload}))
    yield put(updateOccasions(response.data))
}

function* workerDeleteOccasion(action: Action) {
    const response: {data: Occasion[]} = yield call(() => jsonApi.delete(OCCASION_API, {
        data: {
            _id: action.payload['_id']
        }
    }))
    yield put(updateOccasions(response.data))
}

export default function* watcherFetchOccasions() {    
    yield takeEvery(FETCH_OCCASIONS, workerFetchOccasions)
    yield takeEvery(RENEW_OCCASIONS, workerRenewOccasions)
    yield takeEvery(CREATE_OCCASION, workerCreateOccasion)
    yield takeEvery(DELETE_OCCASION, workerDeleteOccasion)
}
