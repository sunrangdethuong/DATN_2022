<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
  >
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">
          Sửa thông tin phòng
        </h6>
        <div>
          <button
            class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            type="button"
            @click="updateInfo"
          >
            Cập nhật
          </button>
          <router-link :to="{ path: '/admin/phong' }">
            <button
              class="bg-emerald-500 text-white active:bg-light-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
            >
              Quay lại
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form>
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Thông tin phòng
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Tên phòng
              </label>
              <input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                v-model="phongInfo.name"
              />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Trạng thái
              </label>
              <select
                v-model="phongInfo.status"
                name="status"
                id="status"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              >
                <option :value="0">Không bảo trì</option>
                <option :value="2">Bảo trì</option>
              </select>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Ảnh
              </label>
              <input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                v-model="phongInfo.image"
              />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Loại phòng
              </label>
              <input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                v-model="phongInfo.loaiPhong"
              />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Đơn giá
              </label>
              <input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                v-model="phongInfo.cost"
              />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Detail
              </label>
              <textarea
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                rows="4"
                v-model="phongInfo.detail"
              >
              </textarea>
            </div>
          </div>
          
          
        </div>

        <hr class="mt-6 border-b-1 border-blueGray-300" />
      </form>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
  data() {
    return {
      idPhong: null,
      phongInfo: {
        name: "",
        status: 0,
        image: "",
        loaiPhong: "",
        cost: 0,
        detail: "",
      },
    };
  },
  async created() {
    const params = window.location.pathname.split("/");
    this.idPhong = params.pop();

    // Call api
    await this.getPhongById({id: this.idPhong}); 
  },
  computed: {
    ...mapState({
      phong: state => state.phong['phongEditInfo']
    })
  },
  watch: {
    phong(val){
      this.phongInfo = {...val};
    }
  },
  methods: {
    ...mapActions('phong', ['getPhongById', 'updatePhongById']),
    async updateInfo() {
      const {name, status, image, loaiPhong, cost, detail} = this.phongInfo;
      await this.updatePhongById({name, status, image, loaiPhong, cost, detail}).then(() => {
        alert('Cập nhật thông tin thành công!');
        window.location.assign('/admin/phong');
      }).catch(() => {
        alert('Cần nhập đầy đủ và đúng thông tin!')
      })
    },
  },
};
</script>
