<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
  >
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">
          Sửa thông tin đơn đặt phòng
        </h6>
        <div>
          <button
            class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            type="button"
            @click="updateInfo"
          >
            Cập nhật
          </button>
          <router-link :to="{ path: '/admin/don-dat-phong' }">
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
          Thông tin đơn đặt phòng
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Tên khách hàng
              </label>
              <input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                :value="donDatPhongInfo.tenKhachHang"
              />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Số CMT
              </label>
              <input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                :value="donDatPhongInfo.soCMT"
              />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Số điện thoại
              </label>
              <input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                :value="donDatPhongInfo.phone"
              />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Ngày đặt phòng
              </label>
              <input type="date" id="checkIn" name="checkIn" :value="donDatPhongInfo.checkIn" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Ngày trả phòng
              </label>
              <input type="date" id="checkOut" name="checkOut" :value="donDatPhongInfo.checkOut" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Thành tiền
              </label>
              <input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                :value="donDatPhongInfo.cost"
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
                v-model="donDatPhongInfo.status"
                name="status"
                id="status"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              >
                <option :value="0">Chưa thanh toán</option>
                <option :value="1">Đã thanh toán</option>
              </select>
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
      idDonDatPhong: null,
      donDatPhongInfo: {
        tenKhachHang: "",
        soCMT: "",
        phone: "",
        checkIn: new Date(),
        checkOut: new Date(),
        cost: 0,
        status: 0,
        note: ""
      },
    };
  },
  async created() {
    const params = window.location.pathname.split("/");
    this.idDonDatPhong = params.pop();

    // Call api
    await this.getDonDatPhongById({id: this.idDonDatPhong}); 
  },
  computed: {
    ...mapState({
      donDatPhong: state => state.donDatPhong['donDatPhongEditInfo']
    })
  },
  watch: {
    donDatPhong(val){
      this.donDatPhongInfo = {...val};
    }
  },
  methods: {
    ...mapActions('donDatPhong', ['getDonDatPhongById', 'updateDonDatPhongById']),
    async updateInfo() {
      const {tenKhachHang, soCMT, phone,checkIn,checkOut,cost,status, note} = this.donDatPhongInfo;
      await this.updateDonDatPhongById({tenKhachHang, soCMT, phone,checkIn,checkOut,cost,status, note}).then(() => {
        alert('Cập nhật thông tin thành công!');
        window.location.assign('/admin/don-dat-phong');
      }).catch(() => {
        alert('Cần nhập đầy đủ và đúng thông tin!')
      })
    },
  },
};
</script>
