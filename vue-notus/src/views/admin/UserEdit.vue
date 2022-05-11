<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
  >
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">
          Sửa thông tin tài khoản
        </h6>
        <div>
          <button
            class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            type="button"
            @click="updateInfo"
          >
            Cập nhật
          </button>
          <router-link :to="{ path: '/admin/user' }">
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
          Thông tin tài khoản
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Tên người dùng
              </label>
              <input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                v-model="userInfo.name"
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
                v-model="userInfo.phone"
              />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Chức vụ
              </label>
              <select
                v-model="userInfo.role"
                name="role"
                id="role"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              >
                <option :value="0">Nhân viên</option>
                <option :value="1">Người quản trị</option>
              </select>
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
                v-model="userInfo.status"
                name="status"
                id="status"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              >
                <option :value="0">Ngừng hoạt động</option>
                <option :value="1">Kích hoạt</option>
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
      idUser: null,
      userInfo: {
        name: "",
        phone: "",
        role: 0,
        status: 0,
      },
    };
  },
  async created() {
    const params = window.location.pathname.split("/");
    this.idUser = params.pop();

    // Call api
    await this.getUserById({id: this.idUser}); 
  },
  computed: {
    ...mapState({
      user: state => state.user['userEditInfo']
    })
  },
  watch: {
    user(val){
      this.userInfo = {...val};
    }
  },
  methods: {
    ...mapActions('user', ['getUserById', 'updateUserById']),
    async updateInfo() {
      const {name,phone,role,status} = this.userInfo;
      await this.updateUserById({name,phone,role,status}).then(() => {
        alert('Cập nhật thông tin thành công!');
        window.location.assign('/admin/user');
      }).catch(() => {
        alert('Cần nhập đầy đủ và đúng thông tin!')
      })
    },
  },
};
</script>
