<template>
  <section class="pb-16 bg-blueGray-200 relative pt-32">
    <div
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
    </div>

    <div class="container mx-auto">
      <div
        class="justify-center bg-white shadow-xl rounded-lg -mt-16 py-1 px-12 relative z-10"
      >
        <div class="mt-12">
          <div class="w-full mb-12 px-4 flex">
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
                {{ phongInfo.name }}
              </h2>
              <span class="uppercase text-blueGray-600 text-sm font-bold mb-2"
                >Loại phòng:
              </span>
              <span class="mb-2">{{ phongInfo.loaiPhong }}</span>
              <br />
              <span class="uppercase text-blueGray-600 text-sm font-bold mb-2"
                >Đơn giá:
              </span>
              <span>{{ phongInfo.cost }} VND</span>
              <br />
              
                <xem-phong-button
                :elementId="phongInfo.id"
                @datPhong="datPhong"
              ></xem-phong-button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import XemPhongButton from "@/components/Buttons/XemPhongButton.vue";

//import CardListPhong from "@/components/Cards/CardListPhong.vue";
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      idPhong: null,
      phongInfo: {
        name: "",
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
  components: { XemPhongButton },
  props: {
    elementId: Number,
  },
  computed: {
    ...mapState({
      phong: (state) => state.phong["phongEditInfo"],
    }),
  },
  watch: {
    phong(val) {
      this.phongInfo = { ...val };
    },
  },
  methods: {
    ...mapActions("phong", ["getPhongById"]),
    datPhong(id) {
      window.location.assign(
        `/user/dat-phong/${id}/${this.checkIn}/${this.checkOut}`
      );
    },
  },
};
</script>
