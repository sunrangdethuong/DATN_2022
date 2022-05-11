import {  createStore } from "vuex";
import { DonDatPhongModule } from "./modules/don-dat-phong.module";
import { PhongModule } from "./modules/phong.module";
import { UserModule } from "./modules/user.module";

const store = createStore({
  namespaced: true,
  modules: {
    user: UserModule,
    phong: PhongModule,
    donDatPhong: DonDatPhongModule
  }
})

export default store;