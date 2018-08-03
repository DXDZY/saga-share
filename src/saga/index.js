import {call,put,takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import './../mock';
function* fetchData(action){
    try{
        const data = yield call(axios.post,'api/fetchData',{
            id:action.curId,
        });
        yield put({
            type:'loginSuccess',
            data:data.data,
            curId:action.curId,
        })
    }catch(e){
        yield put({
            type:'loginFail',
            error:e,
        })
    }
}
export default function* watchFetchData(){
  console.log(123456);
    yield takeLatest('login',fetchData);
}