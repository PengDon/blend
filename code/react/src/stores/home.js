import { observable } from 'mobx';
import HomeApi from 'api/home';

const HomeStore = observable({
	title: 'this is home page',
	list: [],
	result: [],
 
	// 获取首页数据
	async getList(){
		this.list = await HomeApi.getList();
	},
	// 根据关键字获取数据
	async queryByKey(key){
		this.result = await HomeApi.queryByKey(key);
	}
});

export default HomeStore;