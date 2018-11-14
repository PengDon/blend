import React from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

@inject( 'homeStore' )
@observer
class Home extends React.Component {

    search(){
        this.props.homeStore.queryByKey(this.input.value);
    }

    componentDidMount() {
        this.props.homeStore.getList();
    }

    render() {
        return (
            <div>
                <p>{this.props.homeStore.title}</p>
                <Link to="/about">go to About</Link>

                <div style={{textAlign: 'left', width: '450px', margin: 'auto'}}>
                    <p>下面是列表数据：</p>
                    {
                        this.props.homeStore.list && this.props.homeStore.list.map((el,key) => {
                            return ( 
                                <div key={key} style={{margin:'10px 0'}}>
                                    <div>标题：{el.title}</div>
                                    <div>时间：{el.date}</div>    
                                </div> 
                            )
                        })
                    }
                </div>

                <div style={{textAlign: 'left', width: '450px', margin: '100px auto'}}>
                    <input type="text" ref={input => this.input = input} placeholder="输入查询关键字"/><button onClick={this.search.bind(this)}>查询</button>
                    {
                        this.props.homeStore.result.name && this.props.homeStore.result.name.map((el,key) => {
                            return (<div key={key}>{el}</div>)
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Home;