import React, { Component } from 'react';
import { connect } from 'dva';
import { Card} from 'antd';

class UserPage extends Component {
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