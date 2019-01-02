import React, { Component } from 'react';
import { connect } from 'dva';
import {
    Form, Icon, Input, Button, Checkbox,
  } from 'antd';
import styles from './Login.less';

@connect(({ login, loading }) => ({
  login,
  submitting: loading.effects['login/login'],
}))

class LoginPage extends Component {
  state = {
    autoLogin: true,
  };

  componentDidMount() {
    
  }

  changeAutoLogin = e => {
    this.setState({
      autoLogin: e.target.checked,
    });
  };


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        let obj = {};
        obj.name = values.userName;
        obj.password = values.password;

        console.log('=====重构后的对象====',obj);

        this.props.dispatch({
            type:'login/login',
            payload:obj,
          });
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { login, submitting } = this.props;
    const { type, autoLogin } = this.state;

    return (
      <Form onSubmit={this.handleSubmit} className={styles.main}>
        <Form.Item>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
            setFieldsValue:autoLogin,
          })(
            <Checkbox onChange={this.changeAutoLogin}>Remember me</Checkbox>
          )}
          <Button style={{ float: 'right' }} loading={submitting} type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {
    userList: state.user.userList,
  };
}

export default connect(mapStateToProps)(Form.create()(LoginPage));