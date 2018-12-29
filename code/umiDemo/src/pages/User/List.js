import React, { Component } from 'react';
import { connect } from 'dva';
import { Table , Modal, Button, Form, Input,Select } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

class UserPage extends Component {
  state = {
    visible: false,
    id: null,
  };

  columns = [
    {
      title: '用户编号',
      dataIndex: 'userId',
    },
    {
      title: '名称',
      dataIndex: 'name',
    },
    {
      title: '角色类型',
      dataIndex: 'roleType',
      render: value => {
        switch (value) {
          case 1:
            return '管理员';
            break;
          case 2:
            return '普通用户';
            break;
          case 3:
            return 'vip用户';
            break;
          default:
            return '异常用户';
            break;
        }
      },
    },
    {
      title: '登录状态',
      dataIndex: 'status',
      render: value => value?'已登录':'未登录',
    },
    {
      title: '操作',
      key: 'action',
      render:(obj)=>{
        return (
          <span>
            <a onClick={e => this.remove(obj.userId)}>删除</a>
          </span>
        );
      },
    },
  ];

  componentDidMount() {
    this.queryList();
  }

  queryList = () => {
    this.props.dispatch({
      type: 'user/queryList',
    });
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleOk = () => {
    const { dispatch, form: { validateFields } } = this.props;

    validateFields((err, values) => {
      console.log('=====当前输入对象=====',values)
      values.roleType = values.roleType.key;
      console.log('=====重构后的对象=====',values)
      if (!err) {
        dispatch({
          type: 'user/addUser',
          payload: values,
        });
        this.setState({ visible: false });
      }
    });
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  }

  handleChange = (value) => {
    console.log('当前选中的值',value)
  }

  remove(userId){
    this.props.dispatch({
      type:'user/delUser',
      payload:userId,
    });
  }

  render() {
    const { visible } = this.state;
    const { userList = [], form: { getFieldDecorator } } = this.props;

    return (
      <div>
        <Table columns={this.columns} dataSource={userList}  rowKey="userId" />

        <Button onClick={this.showModal}>新建</Button>

        <Modal
          title="新建记录"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form>
            <FormItem label="名称">
              {getFieldDecorator('name', {
                rules: [{ required: true }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem label="密码">
              {getFieldDecorator('password', {
                rules: [{ required: true }],
              })(
                <Input type="password"/>
              )}
            </FormItem>
            <FormItem label="角色">
              {getFieldDecorator('roleType', {
                rules: [{ required: true }],
              })(
                <Select labelInValue onChange={this.handleChange}>
                  <Option value="2">普通用户</Option>
                  <Option value="3">vip用户</Option>
                </Select>
              )}
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state');
  console.log(state);
  return {
    userList: state.user.userList,
  };
}

export default connect(mapStateToProps)(Form.create()(UserPage));