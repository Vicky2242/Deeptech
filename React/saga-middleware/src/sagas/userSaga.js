import { call, put, takeLatest } from "redux-saga/effects";
import { fetchUsers, fetchUserSuccess, fetchUserFailure } from "../features/userSlice";

function* fetchUsersWorker() {
  try {
    const response = yield call(
      fetch,
      "https://jsonplaceholder.typicode.com/users"
    );

    const data = yield response.json();

    yield put(fetchUserSuccess(data));
  } catch (error) {
    yield put(fetchUserFailure());
  }
}

// ✅ EXPORT NAME MUST MATCH IMPORT
export function* userSaga() {
  yield takeLatest(fetchUsers.type, fetchUsersWorker);
}
