import { 	observable } from 'mobx';

import loginApi from 'api/login';

const UserInfoStore = observable({
	userInfo: [],
	// 获取用户数据
	async login(pars) {
		let res = await loginApi.login(pars);
		console.log('当前登录用户=======', res);
		this.userInfo = res;
	}

});

export default UserInfoStore;