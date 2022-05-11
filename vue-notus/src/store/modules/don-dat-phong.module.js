import instance from "../axios.config"

export const DonDatPhongModule = {
  namespaced: true,
  state: () => ({
    donDatPhongs: [],
    donDatPhongEditInfo: null,
    idDonDatPhongDelete: '',
    money: []
  }),
  mutations: {
    setMoney(state, payload) {
      state.money = payload;
    },
    setDonDatPhongs(state, payload) {
      state.donDatPhongs = payload;
    },
    setDonDatPhongEditInfo(state, payload) {
      state.donDatPhongEditInfo = payload;
    },
    setIdDonDatPhongDelete(state, payload) {
      state.idDonDatPhongDelete = payload;
    },
    setDonDatPhongToList(state, payload) {
      state.donDatPhongs.push(payload);
    },
    setAfterUpdateDonDatPhong(state, payload) {
      const indexDonDatPhong = state.donDatPhongs.findIndex(el => el.id === state.donDatPhongEditInfo.id);
      state.donDatPhongs.splice(indexDonDatPhong, 1, payload);
    },
    setAfterDeleteDonDatPhong(state, payload) {
      console.log(payload);
      state.donDatPhongs = state.donDatPhongs.filter(el => el.id !== state.idDonDatPhongDelete)
    }
  },
  actions: {
    async getAllDonDatPhongs({commit}) {
      await instance.get('/don-dat-phongs').then(res => {
        if(res) {
          commit('setDonDatPhongs', res.data);
        }
      })
    },
    async getSumCostByMonth({commit}) {
      await instance.get('/don-dat-phongs/year').then(res => {
        if(res) {
          commit('setMoney', res.data);
        }
      })
    },
    async getDonDatPhongById({commit}, {id}) {
      await instance.get(`/don-dat-phongs/${id}`).then(res => {
        if(res) {
          commit('setDonDatPhongEditInfo', res.data);
        }
      })
    },
    async searchDonDatPhongs({commit}, {key}) {
      await instance.get(`/don-dat-phongs/search?search=${key}`).then(res => {
        if(res) {
          commit('setDonDatPhongs', res.data);
        }
      })
    },
    async getDonDatPhongByStatus({commit}) {
      await instance.get('/don-dat-phongs/status/0').then(res => {
        if(res) {
          commit('setDonDatPhongs', res.data);
        }
      })
    },
    async createDonDatPhong({commit}, {tenKhachHang, soCMT, phone, checkIn, checkOut, cost, phongId}){
      const data = {tenKhachHang, soCMT, phone, checkIn, checkOut, cost, phongId}
      data.phongId = parseInt(phongId);
      await instance.post('/don-dat-phongs/create', data).then(res => {
        if(res) {
          commit('setDonDatPhongToList', res.data);
        }
      })
    },
    async updateDonDatPhongById({state, commit}, {tenKhachHang, soCMT, phone, checkIn, checkOut, cost, status, note}) {
      const id = state.donDatPhongEditInfo.id;
      const data = { tenKhachHang, soCMT, phone, checkIn, checkOut, cost, status, note};
      await instance.patch(`/don-dat-phongs/${id}`, data).then(res => {
        if(res) {
          commit('setAfterUpdateDonDatPhong', res.data);
          return true;
        } else {
          return false
        }
      })
    },
    async thanhToan({commit}, {id}) {
      commit('setIdDonDatPhongDelete', id);
      await instance.patch(`/don-dat-phongs/thanh-toan/${id}`).then(res => {
        if(res) {
          commit('setAfterDeleteDonDatPhong');
        }
      })
    },
    async deleteDonDatPhongById({commit}, {id}) {
      commit('setIdDonDatPhongDelete', id);
      await instance.delete(`/don-dat-phongs/${id}`).then(res => {
        if(res) {
          commit('setAfterDeleteDonDatPhong');
        }
      })
    }
  },
  getters: {}
}

//export const DonDatPhongModule = {
//  state: () => ({}),
//  mutations: {},
//  actions: {},
//  getters: {}
//}