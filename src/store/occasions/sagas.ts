import { updateOccasions } from "./actions"
import { takeEvery, put, call } from "redux-saga/effects"
import { jsonApi } from '../../services/api/index'
import { CLEAR_OCCASIONS, FETCH_OCCASIONS, Occasion, RENEW_OCCASIONS } from "./types";

function* workerFetchOccasions() {
    const response: {
        data: Occasion[]
    } = yield call(() => jsonApi.get<Occasion[]>("https://run.mocky.io/v3/bb5011ba-cd67-4fa4-b47c-ca2a1d66132e"));
    
    yield put(updateOccasions(response.data))
}

function* workerRenewOccasions() {
    yield put({type: CLEAR_OCCASIONS})

    const response: {
        data: Occasion[]
    } = yield call(() => jsonApi.get<Occasion[]>("https://run.mocky.io/v3/bb5011ba-cd67-4fa4-b47c-ca2a1d66132e"));
    
    yield put(updateOccasions(response.data))
}

export default function* watcherFetchOccasions() {    
    yield takeEvery(FETCH_OCCASIONS, workerFetchOccasions)
    yield takeEvery(RENEW_OCCASIONS, workerRenewOccasions)
}
