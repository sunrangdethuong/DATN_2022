import instance from "../axios.config"

export const PhongModule = {
  namespaced: true,
  state: () => ({
    phongs: [],
    phongEditInfo: null,
    idPhongDelete: '',
  }),
  mutations: {
    setPhongs(state, payload) {
      state.phongs = payload;
    },
    setPhongEditInfo(state, payload) {
      state.phongEditInfo = payload;
    },
    setIdPhongDelete(state, payload) {
      state.idPhongDelete = payload;
    },
    setPhongToList(state, payload) {
      state.phongs.push(payload);
    },
    setAfterUpdatePhong(state, payload) {
      const indexPhong = state.phongs.findIndex(el => el.id === state.phongEditInfo.id);
      state.phongs.splice(indexPhong, 1, payload);
    },
    setAfterDeletePhong(state, payload) {
      console.log(payload);
      state.phongs = state.phongs.filter(el => el.id !== state.idPhongDelete)
    },
  },
  actions: {
    async getPhongsByDate({commit}, {checkIn, checkOut}) {
      //const data = {checkIn, checkOut};
      //console.log(data);
      await instance.get(`/phongs/search?checkIn=${checkIn}&checkOut=${checkOut}`).then(res => {
        if(res) {
          commit('setPhongs', res.data);
        }
      })
    },
    async getAllPhongs({commit}) {
      await instance.get('/phongs').then(res => {
        if(res) {
          commit('setPhongs', res.data);
        }
      })
    },
    async getPhongById({commit}, {id}) {
      await instance.get(`/phongs/${id}`).then(res => {
        if(res) {
          commit('setPhongEditInfo', res.data);
        }
      })
    },
    async getPhongsByStatus({commit}) {
      await instance.get('/phongs/status/0').then(res => {
        if(res) {
          commit('setPhongs', res.data);
        }
      })
    },
    async createPhong({commit}, {name, status, image, loaiPhong, cost, detail}){
      const data = {name, status, image, loaiPhong, cost, detail}
      data.cost = parseInt(cost);
      await instance.post('/phongs/create', data).then(res => {
        if(res) {
          commit('setPhongToList', res.data);
        }
      })
    },
    async updatePhongById({state, commit}, {name, status, image, loaiPhong, cost, detail}) {
      const id = state.phongEditInfo.id;
      const data = {name, status, image, loaiPhong, cost, detail};
      data.cost = parseInt(cost);
      await instance.patch(`/phongs/${id}`, data).then(res => {
        if(res) {
          commit('setAfterUpdatePhong', res.data);
          return true;
        } else {
          return false
        }
      })
    },
    async deletePhongById({commit}, {id}) {
      commit('setIdPhongDelete', id);
      await instance.delete(`/phongs/${id}`).then(res => {
        if(res) {
          commit('setAfterDeletePhong');
        }
      })
    }
  },
  getters: {}
}

//export const PhongModule = {
//  state: () => ({}),
//  mutations: {},
//  actions: {},
//  getters: {}
//}