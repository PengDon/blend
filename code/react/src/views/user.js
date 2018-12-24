import React from "react";
import { observer, inject } from 'mobx-react';

@inject("userStore")
@observer
class User extends React.Component {

  componentDidMount() {
    this.props.userStore.getList();
  }

  render() {
    return (
      <div>
        {
          this.props.userStore.list.map((el, key) => {
            return (
              <div key={key} style={{ margin: "10px 0" }}>
                <div>用户ID：{el.userId}</div>
                <div>用户姓名：{el.name}</div>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default User;
