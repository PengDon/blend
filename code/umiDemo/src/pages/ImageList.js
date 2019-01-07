import React, { Component } from "react";
import { connect } from "dva";
import { Row, Col, Button, Form, Input, Table, Modal } from "antd";


const FormItem = Form.Item;

/* eslint react/no-multi-comp:0 */
@connect(({ rule, loading }) => ({
  rule,
  loading: loading.models.rule,
}))
// @Form.create()
class ImagePage extends Component {
  state = {
    visible: false,
    curImage: null,
    style: {
      body: {
        padding: 0
      }
    }
  };

  columns = [
    {
      title: "用户编号",
      dataIndex: "di"
    },
    {
      title: "名称",
      dataIndex: "fromPageTitleEnc"
    },
    {
      title: "来源",
      dataIndex: "fromURLHost"
    },
    {
      title: "操作",
      key: "action",
      render: obj => {
        return (
          <span>
            <a onClick={e => this.look(obj)}>查看</a>
          </span>
        );
      }
    }
  ];

  componentDidMount() {
    this.queryList();
  }

  look = obj => {
    this.setState({
      visible: true
    });
    this.setState({
      curImage: obj.thumbURL
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  queryList = (word) => {
    if(!word){
      word = '美食';
    }
    let params = `tn=resultjson_com&ipn=rj&ie=utf-8&oe=utf-8&word=${word}`;
    this.props.dispatch({
      type: "image/queryList",
      payload: params
    });
  };

  handleFormReset = () => {
    const { form, dispatch } = this.props;
    form.resetFields();
  };

  handleSearch = e => {
    e.preventDefault();

    const { dispatch, form } = this.props;

    form.validateFields((err, fieldsValue) => {
      let self = this;
      if (err) return;
      console.log('-----fieldsValue-----',fieldsValue);
      if(fieldsValue.name){
        self.queryList(fieldsValue.name);
      }
    });
  };

  renderSimpleForm() {
    const {
      form: { getFieldDecorator }
    } = this.props;
    return (
      <Form onSubmit={this.handleSearch} layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <FormItem label="关键词">
              {getFieldDecorator("name")(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <span>
              <Button type="primary" htmlType="submit">
                查询
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>
                重置
              </Button>
            </span>
          </Col>
        </Row>
      </Form>
    );
  }

  render() {
    const { imageList = [] } = this.props;

    return (
      <div>
        <div>{this.renderSimpleForm()}</div>

        <Table columns={this.columns} dataSource={imageList} rowKey="di" />

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
    imageList: state.image.imageList
  };
}

export default connect(mapStateToProps)(Form.create()(ImagePage));
