import * as types from '../mutation-type';
import { loginService } from '../../services/user';

const User = {
  state: {
    account: '',
    status: '',
    code: '',
    token: '',
    name: '',
    avatar: '',
    introduction: '',
    roles: []
  },
  getters: {
    account: state => state.account,
    status: state => state.status,
    code: state => state.code,
    token: state => state.token,
    name: state => state.name,
    avatar: state => state.avatar,
    introduction: state => state.introduction,
    roles: state => state.roles

  },
  mutations: {
    [types.USER.LOGIN](state, loginUser){
      state.account = loginUser.account;
      state.token = loginUser.token;
      state.name = loginUser.name;
    }
  },
  actions: {
    login({ commit }, loginInfo){
      return new Promise((resolve, reject) => {
        loginService(loginInfo).then(response => {
          commit(types.USER.LOGIN, response);
          resolve();
        }).catch(error => {
            reject(error);
        })
      })
    }
  }
}
export default User
