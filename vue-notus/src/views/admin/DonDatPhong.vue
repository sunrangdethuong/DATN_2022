<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <card-don-dat-phong tableTitle="Danh sách đơn đặt phòng" :data="donDatPhongs" />
    </div>
  </div>
</template>
<script>
import CardDonDatPhong from "@/components/Cards/CardDonDatPhong.vue";
//import {mapActions, mapState} from 'vuex';

export default {
  components: {
    CardDonDatPhong,
  },
  //mounted() {
  //  this.getAllDonDatPhongs();
  //},
  //computed: {
  //  ...mapState({
  //    donDatPhongs: state => state.donDatPhong['donDatPhongs']
  //  })
  //},
  //methods: {
  //  ...mapActions('donDatPhong', ['getAllDonDatPhongs']),
  //}
};
</script>
