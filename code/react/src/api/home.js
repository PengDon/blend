import axios from 'axios';

export default {

    /**
     * 获取首页列表页数据
     * @returns {Promise.<*>}
     */
    async getList(){
        // return await axios.get('http://lemonof.com:82/api/getList').then((res) => res.data.data);
        return await axios.get('https://easy-mock.com/mock/5be8e737aebfd849286cd74f/tlist').then((res) => res.data.data);
    },
    
    /**
     * 根据关键字搜索
     * @param {string} key 
     */
    async queryByKey(key){
        return await axios.get('https://easy-mock.com/mock/5be8e737aebfd849286cd74f/queryByKey?name='+key).then((res) => res.data.data);
    }

}