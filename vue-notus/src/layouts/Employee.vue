<template>
  <div>
    <slidebar-employee/>
    <div class="relative md:ml-64 bg-blueGray-100">
      <admin-navbar />
      <header-stats />
      <div class="px-4 md:px-10 mx-auto w-full -m-24">
        <router-view />
        <footer-admin />
      </div>
    </div>
  </div>
</template>
<script>
import AdminNavbar from "@/components/Navbars/AdminNavbar.vue";
import HeaderStats from "@/components/Headers/HeaderStats.vue";
import FooterAdmin from "@/components/Footers/FooterAdmin.vue";
import SlidebarEmployee from "@/components/Sidebar/SlidebarEmployee.vue";
export default {
  name: "employee-layout",
  components: {
    AdminNavbar,
    HeaderStats,
    FooterAdmin,
    SlidebarEmployee,
  },
};
</script>
