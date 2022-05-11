import instance from "../axios.config"

export const UserModule = {
  namespaced: true,
  state: () => ({
    users: [],
    userEditInfo: null,
    idUserDelete: '',
    user: null,
  }),
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setUserEditInfo(state, payload) {
      state.userEditInfo = payload;
    },
    setIdUserDelete(state, payload) {
      state.idUserDelete = payload;
    },
    setUserToList(state, payload) {
      state.users.push(payload);
    },
    setAfterUpdateUser(state, payload) {
      const indexUser = state.users.findIndex(el => el.id === state.userEditInfo.id);
      state.users.splice(indexUser, 1, payload);
    },
    setAfterDeleteUser(state) {
      state.users = state.users.filter(el => el.id !== state.idUserDelete)
    }
  },
  actions: {
    async getAllUsers({commit}) {
      await instance.get('/users').then(res => {
        if(res) {
          commit('setUsers', res.data);
        }
      })
    },
    async getUserById({commit}, {id}) {
      await instance.get(`/users/${id}`).then(res => {
        if(res) {
          commit('setUserEditInfo', res.data);
        }
      })
    },
    async searchUsers({commit}, {key}) {
      await instance.get(`/users/search?search=${key}`).then(res => {
        if(res) {
          commit('setUsers', res.data);
        }
      })
    },
    async createUser({commit}, {userName, password, name, phone, role, status}){
      const data = {userName, password, name, phone, role, status}
      await instance.post('/users/create', data).then(res => {
        if(res) {
          commit('setUserToList', res.data);
          return true;
        } else {
          return false;
        }
      })
    },
    async updateUserById({state, commit}, { name, phone, role, status}) {
      const id = state.userEditInfo.id;
      const data = { name, phone, role, status};
      await instance.patch(`/users/${id}`, data).then(res => {
        if(res) {
          commit('setAfterUpdateUser', res.data);
          return true;
        } else {
          return false;
        }
      })
    },
    async deleteUserById({commit}, {id}) {
      commit('setIdUserDelete', id);
      await instance.delete(`/users/${id}`).then(res => {
        if(res) {
          commit('setAfterDeleteUser');
        }
      })
    },
    async loginUser({commit}, {userName, password}){
      const data = {userName, password};
      console.log(data);
      await instance.post('/users/login', data).then(res => {
        if(res) {
          commit('setUser', res.data);
          return true;
        } else {
          return false;
        }
      })
    }
  },
  getters: {}
}

//export const UserModule = {
//  state: () => ({}),
//  mutations: {},
//  actions: {},
//  getters: {}
//}