<template>
  <div>
    <!--<sidebar />-->
    <!--<div class="relative md:ml-64 bg-blueGray-100">-->
      <index-navbar />
      <!--<header-user />-->
      <router-view />
      <footer-admin />
      <!--<div class="px-4 md:px-10 mx-auto w-full -m-24">
        
      </div>-->
    <!--</div>-->
  </div>
</template>
<script>
//import UserNavbar from "@/components/Navbars/UserNavbar.vue";
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
//import Sidebar from "@/components/Sidebar/Sidebar.vue";
//import HeaderUser from "@/components/Headers/HeaderUser.vue";
import FooterAdmin from "@/components/Footers/FooterAdmin.vue";
export default {
  name: "user-layout",
  components: {
    IndexNavbar,
    //UserNavbar,
    //Sidebar,
    //HeaderUser,
    FooterAdmin,
  },
};
</script>
