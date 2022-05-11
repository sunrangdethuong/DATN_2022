import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import { Paginate } from "vuejs-paginate";
import store from "./store";
// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app

import App from "@/App.vue";

// layouts

import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/Auth.vue";
import Users from "@/layouts/User.vue";
import Employee from "@/layouts/Employee.vue";


// views for Admin layout

import Dashboard from "@/views/admin/Dashboard.vue";
import User from "@/views/admin/User.vue";
import UserEdit from "@/views/admin/UserEdit.vue";
import UserCreate from "@/views/admin/UserCreate.vue";
import Phong from "@/views/admin/Phong.vue";
import PhongEdit from "@/views/admin/PhongEdit.vue";
import PhongCreate from "@/views/admin/PhongCreate.vue";
import DonDatPhong from "@/views/admin/DonDatPhong.vue";
import DonDatPhongEdit from "@/views/admin/DonDatPhongEdit.vue";

// views for Auth layout

import Login from "@/views/auth/Login.vue";

// views for User layout

import ListPhong from "@/views/user/ListPhong.vue";
import DonDatPhongCreate from "@/views/user/DonDatPhongCreate.vue";
import PhongView from "@/views/user/PhongView.vue";

// views for Employee layout

import ListPhongE from "@/views/employee/ListPhong.vue";
import DatPhongCreate from "@/views/employee/DatPhongCreate.vue";
import ThanhToan from "@/views/employee/ThanhToan.vue";
import ViewPhong from "@/views/employee/ViewPhong.vue";

// views without layouts

import Index from "@/views/Index.vue";

// routes

const routes = [
  {
    path: "/admin",
    redirect: "/admin/dashboard",
    component: Admin,
    children: [
      {
        path: "/admin/user",
        component: User,
      },
      {
        path: '/admin/user/:id',
        component: UserEdit,
      },
      {
        path: '/admin/user/create',
        component: UserCreate,
      },
      {
        path: '/admin/phong',
        component: Phong,
      },
      {
        path: '/admin/phong/:id',
        component: PhongEdit,
      },
      {
        path: '/admin/phong/create',
        component: PhongCreate,
      },
      {
        path: '/admin/don-dat-phong',
        component: DonDatPhong,
      },
      {
        path: '/admin/don-dat-phong/:id',
        component: DonDatPhongEdit,
      },
      {
        path: "/admin/dashboard",
        component: Dashboard,
      },
    ],
  },
  {
    path: "/auth",
    redirect: "/auth/login",
    component: Auth,
    children: [
      {
        path: "/auth/login",
        component: Login,
      },
    ],
  },
  {
    path: "/user",
    redirect: "/user/list-phong",
    component: Users,
    children: [
      {
        path: "/user/list-phong",
        component: ListPhong,
      },
      {
        path: "/user/dat-phong/:id/:checkIn/:checkOut",
        component: DonDatPhongCreate,
      },
      {
        path: "/user/list-phong/:id/:checkIn/:checkOut",
        component: PhongView,
      },
    ],
  },
  {
    path: "/employee",
    redirect: "/employee/list-phong",
    component: Employee,
    children: [
      {
        path: "/employee/list-phong",
        component: ListPhongE,
      },
      {
        path: "/employee/dat-phong/:id/:checkIn/:checkOut",
        component: DatPhongCreate,
      },
      {
        path: "/employee/thanh-toan",
        component: ThanhToan,
      },
      {
        path: "/employee/list-phong/:id/:checkIn/:checkOut",
        component: ViewPhong,
      },
    ],
  },
  {
    path: "/",
    component: Index,
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const vue = createApp(App)
vue.component('Paginate', Paginate);


const utils = vue.use(router).use(store);
utils.mount("#app");
