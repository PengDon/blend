import React from "react";
import { observer, inject } from 'mobx-react';


@inject("userInfoStore")
@observer
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'admin',
      password: 'admin123'
    };
    this.handleClick = this.submitLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
  }
  handleChange(event){
    let obj={};
    obj[event.target.name]=event.target.value;
    this.setState(obj);
  }
  
  submitLogin(){
    let pars={
      name:this.state.userName,
      password:this.state.password
    };
    this.props.userInfoStore.login(pars);
  }

  render() {
    return (
      <div>
        <input name="userName" placeholder="请输入用户名" value={this.state.userName} onChange={this.handleChange.bind(this)} />
        <br />
        <input name="password" type="password" placeholder="请输入密码" value={this.state.password} onChange={this.handleChange.bind(this)}/>
        <br />
        <button onClick={this.handleClick}>登录</button>
        {
          this.props.userInfoStore.userInfo && Object.keys(this.props.userInfoStore.userInfo).map((key) => {
            return(
              <p key={key}>{key}:{this.props.userInfoStore.userInfo[key]}</p>
            )
          })
        }
      </div>
    )
  }
}

export default Login;
