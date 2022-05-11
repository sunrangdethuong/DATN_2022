<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <card-user tableTitle="Danh sách tài khoản" :data="users" />
    </div>
  </div>
</template>
<script>
import CardUser from "@/components/Cards/CardUser.vue";
//import {mapActions, mapState} from 'vuex';

export default {
  components: {
    CardUser,
  },
  //mounted() {
  //  this.getAllUsers();
  //},
  //computed: {
  //  ...mapState({
  //    users: state => state.user['users']
  //  })
  //},
  //methods: {
  //  ...mapActions('user', ['getAllUsers']),
  //}
};
</script>
