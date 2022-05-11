<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0 mt-16"
  >
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">Tạo đơn đặt phòng</h6>
        <div>
          <button
            class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            type="button"
            @click="createInfo"
          >
            Tạo đơn
          </button>
          <router-link :to="{ path: '/user/list-phong' }">
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
                v-model="tenKhachHang"
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
                v-model="soCMT"
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
                v-model="phone"
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
                disabled
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
                Ngày đặt phòng
              </label>
              <input
                disabled
                type="date"
                id="checkIn"
                name="checkIn"
                v-model="checkIn"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
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
              <input
                disabled
                type="date"
                id="checkOut"
                name="checkOut"
                v-model="checkOut"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
        </div>

        <hr class="mt-6 border-b-1 border-blueGray-300 mb-6" />

        <div class="flex">
          <div class="w-full lg:w-6/12 px-4"></div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="uppercase text-rose-500 text-ms font-bold mb-2 absolute right-0 w-20"
                htmlFor="grid-password"
              >
                Thành tiền: {{ cost }} VNĐ
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
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
    this.idPhong = params[3];
    this.checkIn = params[4];
    this.checkOut = params[5];

    // Call api
    await this.getPhongById({ id: this.idPhong });
  },
  computed: {
    ...mapState({
      phong: (state) => state.phong["phongEditInfo"],
    }),
    //checkIn() {
    //  return this.$options.store.getters.CHECK_IN;
    //},
    //checkOut() {
    //  return this.$options.store.getters.CHECK_OUT;
    //},
  },
  watch: {
    phong(val) {
      this.phongInfo = { ...val };
      const start = new Date(this.checkIn).getTime();
      const end = new Date(this.checkOut).getTime();
      const cost =
        parseInt(this.phongInfo.cost) * ((end - start) / (1000 * 60 * 60 * 24));
      this.cost = cost;
    },
  },
  methods: {
    ...mapActions("phong", ["getPhongById"]),
    ...mapActions("donDatPhong", ["createDonDatPhong"]),
    async createInfo() {
      const donDatPhong = {
        tenKhachHang: this.tenKhachHang,
        soCMT: this.soCMT,
        phone: this.phone,
        checkIn: this.checkIn,
        checkOut: this.checkOut,
        cost: this.cost,
        phongId: this.idPhong,
      };
      await this.createDonDatPhong(donDatPhong)
        .then(() => {
          alert("Đặt phòng thành công!");
          window.location.assign("/user/list-phong");
        })
        .catch(() => {
          alert('Cần nhập đầy đủ và đúng thông tin!');
        });
    },
  },
};
</script>
