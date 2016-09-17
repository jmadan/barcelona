import { takeEvery, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';


function* mySaga(){
	yield takeEvery("FETCH_USER_FEED", fetchUserFeed);
}

// function loadFeed() {
// 	return fetch('/api/getmyfeed').then(response => {
// 		return response.json().then((json) => {
// 			return json.feed;
// 		})
// 	}).catch(error => ({error}));
// }

function loadFeed() {
	return fetch('/api/getmyfeed').then(response => {
		return response.json().then(json => ({json}))
	}).catch(error => ({error}));
}

function* fetchUserFeed(action){
	console.log("******fetchUserFeed is called******");
	const { json, error } = yield call(loadFeed);
	
	if(json.feed){
		yield put({type: "FETCHED_USER_FEED_SUCCESS", payload: json.feed});
	} else {
		yield put({type: "FETCHED_USER_FEED_FAILED", error});
	}
}

export default mySaga;