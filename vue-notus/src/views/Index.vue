<template>
  <div>
    <index-navbar />
    <section
      class="header relative pt-16 items-center flex h-screen max-h-860-px"
    >
      <div class="container mx-auto items-center flex flex-wrap">
        <div class="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
          <div class="pt-32 sm:pt-0">
            <h2 class="font-semibold text-4xl text-blueGray-600">
              Hanoi City Backpackers Hostel
            </h2>
            <h3 class="font-semibold text-1xl text-blueGray-600">
              Số 55, Phố Bát Sứ, Phố Cổ, Hà Nội, Việt Nam
            </h3>
            <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
              Hanoi City Backpackers Hostel is ideally located in the very heart
              of Hanoi Old Quarter, just few minutes walk to the Hoan Kiem Lake,
              Cathedral, Water Puppet Theatre, Ho Chi Minh Complex, Temple of
              Literature... There are many highly recommended restaurants, bars,
              pubs near by.
            </p>
            <div class="mt-12">
              <router-link :to="{ path: '/user/list-phong' }">
                <button
                  class="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-emerald-500 active:bg-emerald-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  type="button"
                >
                  Tìm phòng ngay
                </button>
              </router-link>
              <router-link :to="{ path: '/auth/login' }">
                <button
                  class="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-red-500 active:bg-emerald-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  type="button"
                >
                  Đăng nhập
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <img
        class="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
        :src="patternVue"
        alt="..."
      />
    </section>

    <section class="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
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
            class="text-blueGray-100 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div class="container mx-auto">
        <div class="flex flex-wrap items-center">
          <div
            class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32"
          >
            <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-500"
            >
              <img
                alt="..."
                src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/59731218.jpg?k=6e0f7a3b6f1b000c5ba09459b0b6ccf513e4bb5370ecda2b3e3cf25e6841297a&o="
                class="w-full align-middle rounded-t-lg"
              />
              <blockquote class="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  class="absolute left-0 w-full block h-95-px -top-94-px"
                >
                  <polygon
                    points="-30,95 583,95 583,65"
                    class="text-emerald-500 fill-current"
                  ></polygon>
                </svg>
                <h4 class="text-xl font-bold text-white">
                  Great for our hostel
                </h4>
                <p class="text-md font-light mt-2 text-white">
                  Hãy để chuyến đi của quý khách có một khởi đầu tuyệt vời khi ở
                  lại nhà nghỉ này, nơi có Wi-Fi miễn phí trong tất cả các
                  phòng. Nằm ở vị trí chiến lược tại Phố Cổ, cho phép quý khách
                  lui tới và gần với các điểm thu hút và tham quan địa phương.
                  Đừng rời đi trước khi ghé thăm Pho Co nổi tiếng.
                </p>
              </blockquote>
            </div>
          </div>

          <div class="w-full md:w-6/12 px-4">
            <div class="flex flex-wrap">
              <div class="w-full md:w-6/12 px-4">
                <div class="relative flex flex-col mt-4">
                  <div class="px-4 py-5 flex-auto">
                    <div
                      class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                    >
                      <i class="fas fa-sitemap"></i>
                    </div>
                    <h6 class="text-xl mb-1 font-semibold">
                      Nằm ở trung tâm thành phố Hà Nội
                    </h6>
                    <p class="mb-4 text-blueGray-500">
                      Chỉ vài phút đi bộ đến Hồ Hoàn Kiếm, Nhà thờ lớn, Văn
                      Miếu...
                    </p>
                  </div>
                </div>
                <div class="relative flex flex-col min-w-0">
                  <div class="px-4 py-5 flex-auto">
                    <div
                      class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                    >
                      <i class="fas fa-solid fa-location-arrow"></i>
                    </div>
                    <h6 class="text-xl mb-1 font-semibold">
                      Nhận phòng [24 giờ]
                    </h6>
                    <p class="mb-4 text-blueGray-500">
                      Khách hàng có thể đặt phòng 24/7 với đội ngũ hỗ trợ liên
                      tục.
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-6/12 px-4">
                <div class="relative flex flex-col min-w-0 mt-4">
                  <div class="px-4 py-5 flex-auto">
                    <div
                      class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                    >
                      <i class="fas fa-newspaper"></i>
                    </div>
                    <h6 class="text-xl mb-1 font-semibold">Đáng tiền nhất</h6>
                    <p class="mb-4 text-blueGray-500">
                      Nơi đây được đánh giá 9.0/10 cho chỗ ở đáng tiền.
                    </p>
                  </div>
                </div>
                <div class="relative flex flex-col min-w-0">
                  <div class="px-4 py-5 flex-auto">
                    <div
                      class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                    >
                      <i class="fas fa-file-alt"></i>
                    </div>
                    <h6 class="text-xl mb-1 font-semibold">Bãi đỗ xe</h6>
                    <p class="mb-4 text-blueGray-500">
                      Nhà nghỉ có bãi đỗ xe rộng rãi, có bảo vệ 24/7.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    

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
          class="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10"
        >
          <div class="w-full text-center lg:w-8/12">
            <p class="text-4xl text-center">
              <span role="img" aria-label="love"> 😍 </span>
            </p>
            <h3 class="font-semibold text-3xl">Do you love this?</h3>
            <p class="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
              Tìm phòng ở đây rẻ hơn 99% so với tất cả các lựa chọn khác trong
              thành phố. Nhận được nhiều hơn những gì quý khách mặc cả ở đây,
              nơi có điểm số đáng đồng tiền cao hơn 91% so với các chỗ ở của
              thành phố. Những khách đã ở tại nhà trọ tập thể này đã cho điểm
              nơi đây cao hơn 93% so với các chỗ ở trong thành phố.
            </p>
            <div class="sm:block flex flex-col mt-10">
              <router-link :to="{ path: '/user/list-phong' }">
                <button
                  class="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-emerald-500 active:bg-emerald-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  type="button"
                >
                  Tìm phòng ngay
                </button>
              </router-link>
              <router-link :to="{ path: '/auth/login' }">
                <button
                  class="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-red-500 active:bg-emerald-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  type="button"
                >
                  Đăng nhập
                </button>
              </router-link>
            </div>
            <div class="text-center mt-16"></div>
          </div>
        </div>
      </div>
    </section>
    <footer-component />
  </div>
</template>
<script>
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
import FooterComponent from "@/components/Footers/Footer.vue";

import patternVue from "@/assets/img/pattern_vue.png";
import componentBtn from "@/assets/img/component-btn.png";
import componentProfileCard from "@/assets/img/component-profile-card.png";
import componentInfoCard from "@/assets/img/component-info-card.png";
import componentInfo2 from "@/assets/img/component-info-2.png";
import componentMenu from "@/assets/img/component-menu.png";
import componentBtnPink from "@/assets/img/component-btn-pink.png";
import documentation from "@/assets/img/documentation.png";
import login from "@/assets/img/login.jpg";
import profile from "@/assets/img/profile.jpg";
import landing from "@/assets/img/landing.jpg";


export default {
  data() {
    return {
      patternVue,
      componentBtn,
      componentProfileCard,
      componentInfoCard,
      componentInfo2,
      componentMenu,
      componentBtnPink,
      documentation,
      login,
      profile,
      landing,
    };
  },
  components: {
    IndexNavbar,
    FooterComponent,
  },
};
</script>
