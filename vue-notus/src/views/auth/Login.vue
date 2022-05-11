<template>
  <div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-4/12 px-4">
        <div
          class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
        >
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <br>
            <div class="text-blueGray-400 text-center mb-3 font-bold">
              <small>ĐĂNG NHẬP</small>
            </div>
            <form>
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Username
                </label>
                <input
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Username"
                  v-model="userName"
                />
              </div>

              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                  type="password"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                  v-model="password"
                />
              </div>

              <div class="text-center mt-6">
                <!--<button
                  class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="button"
                  @click="login"
                >
                  Sign In
                </button>-->
                <button class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" 
                  type="button"
                  @click="login"
                >Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions, mapState} from 'vuex';

export default {
  computed: {
    ...mapState({
          user: (state) => state.user["user"],
    }),
  },
  methods: {
    ...mapActions('user', ['loginUser']),
    async login() {
      const userInfo = {
        userName: this.userName,
        password: this.password,
      }
      await this.loginUser(userInfo)
      .then(() => {
        if(this.user.status === 0) {
          alert('Tài khoản chưa được kích hoạt!')
        } else if(this.user.role === 1) {
          window.location.assign('/admin');
        } else {
          window.location.assign('/employee');
        }
      }).catch(() => {
        alert('Tài khoản hoặc mật khẩu không đúng!');
      })
    },
  },
};
</script>
