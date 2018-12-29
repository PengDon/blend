import React, { Component } from 'react';
import { connect } from 'dva';
import { Table,Card} from 'antd';

class UserPage extends Component {

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
    },
    {
      title: '登录状态',
      dataIndex: 'status',
      render: value => value?'已登录':'未登录',
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

  render() {
    const { userList = [] } = this.props;
    console.log('userList');
    console.log(userList);

    return (
      <div>
        {userList.map(v => <Card
          key={v.userId}
          title={v.name}
          style={{ width: 300, marginBottom: '16px' }}
        >{v.createTime}</Card>)}

        <Table columns={this.columns} dataSource={userList}  rowKey="id" />
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

export default connect(mapStateToProps)(UserPage);