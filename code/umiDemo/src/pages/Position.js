import React, { Component } from 'react';
import { connect } from 'dva';
import { Table , Modal} from 'antd';
// import  AMap from 'http://webapi.amap.com/maps?v=1.4.4&key=ad26780bfaabf0ca27ae6078e2e81682';


class PostPage extends Component {
  state = {
   
  };

  

  componentDidMount() {

  }

  render() {
    

    return (
      <div>
         当前位置
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    imageList: state.image.imageList,
  };
}

export default connect(mapStateToProps)(PostPage);