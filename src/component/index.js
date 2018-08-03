import React, { Component } from 'react';
import {connect} from 'react-redux';
import './index.css';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    loginClick=()=>{
        this.props.login('12');
    }
    logoutClick=()=>{
        this.props.logout();
    }
    render() { 
        return (  
            <div className="container">
                <a className="login" onClick={this.props.isLogin?this.logoutClick:this.loginClick}>{this.props.isLogin?'退出':'登录'}</a>
                <div className="line">
                    当前登陆Id:<span className="red">{this.props.curId}</span>
                </div>
                <div className="line">
                    服务器返回信息：<span className="red">{this.props.data}</span>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
    isLogin:state.isLogin,
    curId:state.curId,
    data:state.data,
  });
const mapDispatchToProps = (dispatch)=>({
    login:(id)=>{
        dispatch({
            type:'login',
            curId:id,
        })
    },
    logout:(id)=>{
        dispatch({
            type:'logout',
        })
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Login);