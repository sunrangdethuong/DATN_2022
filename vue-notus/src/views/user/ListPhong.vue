<template>
  <section class="pb-16 bg-blueGray-200 relative pt-32">
    <!--<div
      class="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
      style="transform: translateZ(0)"
    >
      <svg
        class="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          class="text-blueGray-200 fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>-->

    <div class="container mx-auto">
      <div
        class="justify-center bg-white shadow-xl rounded-lg -mt-16 py-1 px-12 relative z-10"
      >
        <div class="mt-4">
          <div class="w-full mb-12 px-4">
            <div class="flex flex-wrap">
              <div class="px-4">
                <div class="relative mb-3">
                  <label
                    class="uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Ngày đặt phòng:
                  </label>
                  <input
                    type="date"
                    id="checkIn"
                    name="checkIn"
                    v-model="checkIn"
                    class="border-0 px-5 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-300 ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div class="px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Ngày trả phòng:
                  </label>
                  <input
                    type="date"
                    id="checkOut"
                    name="checkOut"
                    v-model="checkOut"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-300 ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div class="px-4 mt-2">
                <div class="relative w-full mb-3">
                  <button
                    class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    @click="searchPhong"
                  >
                    Tìm phòng
                  </button>
                  <router-link :to="{ path: '/' }">
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
            <!--<card-list-phong tableTitle="Danh sách phòng chưa đặt" :data="phongs" />-->

            <div class="flex flex-wrap p-3 md:py-[35]">
              <div
                class="w-full lg:w-6/12 px-4 space-y-2 md:space-y-6"
                v-for="phong in phongs"
                :key="phong.id"
              >
                <div
                  class="card card-side bg-base-200 shadow-xl relative mb-3 flex"
                >
                  <figure>
                    <img
                      src="https://api.lorem.space/image/movie?w=150&h=150"
                      alt="Movie"
                    />
                  </figure>
                  <div class="card-body px-4">
                    <h2
                      class="card-title uppercase text-blueGray-600 text-lg font-bold mb-2"
                    >
                      {{ phong.name }}
                    </h2>
                    <span
                      class="uppercase text-blueGray-600 text-sm font-bold mb-2"
                      >Loại phòng:
                    </span>
                    <span class="mb-2">{{ phong.loaiPhong }}</span>
                    <br />
                    <span
                      class="uppercase text-blueGray-600 text-sm font-bold mb-2"
                      >Đơn giá:
                    </span>
                    <span>{{ phong.cost }} VND</span>
                    <br />
                    <dat-phong-button
                      :elementId="phong.id"
                      @getInfor="getInfor"
                      @datPhong="datPhong"
                    ></dat-phong-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import DatPhongButton from "@/components/Buttons/DatPhongButton.vue";

//import CardListPhong from "@/components/Cards/CardListPhong.vue";
import { mapActions, mapState } from "vuex";


export default {
  components: { DatPhongButton },
  props: {
    elementId: Number,
  },
  computed: {
    ...mapState({
      phongs: (state) => state.phong["phongs"],
    }),
  },
  methods: {
    ...mapActions("phong", ["getPhongsByDate"]),
    async searchPhong() {
      const date = {
        checkIn: this.checkIn,
        checkOut: this.checkOut,
      };
      if(date.checkIn === undefined || date.checkOut === undefined) {
        alert('Bạn cần nhập ngày để tìm phòng!');
      } else if(new Date(date.checkIn).getTime() >= new Date(date.checkOut).getTime()) {
        alert('Bạn cần nhập ngày trả phòng lớn hơn ngày đặt phòng!')
      } else {
        await this.getPhongsByDate(date);
      }
    },
    datPhong(id) {
      window.location.assign(`/user/dat-phong/${id}/${this.checkIn}/${this.checkOut}`);
    },
    getInfor(id) {
      window.location.assign(`/user/list-phong/${id}/${this.checkIn}/${this.checkOut}`);
    }
  },
};
</script>
