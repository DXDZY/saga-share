
import * as types from './../action';
const myReducer=(state={
    isLogin:false,
    curId:'',
    error:null,
    data:'',
},action)=>{
    switch(action.type){
        case types.loginSuccess:
            return {
                ...state,
                isLogin:true,
                curId:action.curId,
                data:action.data,
            }
        case types.logout:
            return {
                ...state,
                isLogin:false,
                data:'',
                curId:'',
            }
        case types.loginFail:
            return {
                ...state,
                ...action.error,
            }
        default:
            return state;
    }
}
export default myReducer;