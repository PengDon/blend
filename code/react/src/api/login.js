import axios from 'axios';

export default {

    /**
     * 登录
     * @returns {Promise.<*>}
     */
    async login(pars){
        return await axios.post('/api/v1/login',pars).then((res) => res.data.data);
    }
}