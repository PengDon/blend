import React, { Component } from 'react';
import { connect } from 'dva';
import { Table , Modal} from 'antd';

class ImagePage extends Component {
  state = {
    visible: false,
    curImage:null,
    style:{
      body:{
        padding:0
      }
    }
  };

  columns = [
    {
      title: '用户编号',
      dataIndex: 'di',
    },
    {
      title: '名称',
      dataIndex: 'fromPageTitleEnc',
    },
    {
      title: '来源',
      dataIndex: 'fromURLHost',
    },
    {
      title: '操作',
      key: 'action',
      render:(obj)=>{
        return (
          <span>
            <a onClick={e => this.look(obj)}>查看</a>
          </span>
        );
      },
    },
  ];

  componentDidMount() {
    this.queryList();
  }

  look = (obj) =>{
     this.setState({
      visible: true,
     });
     this.setState({
      curImage:obj.thumbURL,
     });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  queryList = () => {
    let params = 'tn=resultjson_com&ipn=rj&ie=utf-8&oe=utf-8&word=萌宠';
    this.props.dispatch({
      type: 'image/queryList',
      payload: params,
    });
  };

  render() {
    const { imageList = []} = this.props;

    return (
      <div>
        <Table columns={this.columns} dataSource={imageList}  rowKey="di" />

        <Modal
          title="查看图片"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          bodyStyle={this.state.style.body}
        >
          <img src={this.state.curImage} />
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    imageList: state.image.imageList,
  };
}

export default connect(mapStateToProps)(ImagePage);