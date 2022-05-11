<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <card-phong tableTitle="Danh sách phòng" :data="phongs" />
    </div>
  </div>
</template>
<script>
import CardPhong from "@/components/Cards/CardPhong.vue";
import {mapActions, mapState} from 'vuex';

export default {
  components: {
    CardPhong,
  },
  mounted() {
    this.getAllPhongs();
  },
  computed: {
    ...mapState({
      phongs: state => state.phong['phongs']
    })
  },
  methods: {
    ...mapActions('phong', ['getAllPhongs']),
  }
};
</script>
