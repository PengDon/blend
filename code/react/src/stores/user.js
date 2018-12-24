import { observable } from 'mobx';
import userApi from 'api/user';

const UserStore = observable({
	list: [],
 
	// 获取用户数据
	async getList(){
    let res = await userApi.getList();
    console.log('获取用户数据=======',res);
    this.list = res;
	},

});

export default UserStore;