<script>
import FeatureCard from '../components/feature/FeatureCard.vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../assets/css/style.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
    FeatureCard,
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Mousewheel, Keyboard],

      features: [
        {
          imageSrc: "https://source.unsplash.com/random/300x300/?1",
          category: "Solo travel",
          author: "Ed M. Appleton",
          title: "The Golden Sands Of Florida And California",
          link: "#",
          description: "Nisi, proin amet nisi, vitae varius. Dictum lorem massa pellentesque lorem diam suspendisse.",
        },
        {
          imageSrc: "https://source.unsplash.com/random/300x300/?1",
          category: "Cruises",
          author: "Tia E. McLaren",
          title: "Budget Trip Doesn’t Mean Boring",
          link: "#",
          description: "In eu at rutrum mauris eget. Venenatis morbi mauris quis gravida fusce id.",
        },
        {
          imageSrc: "https://source.unsplash.com/random/300x300/?1",
          category: "On the road",
          author: "Angel V. Payne",
          title: "5 places to visit this Summer",
          link: "#",
          description: "Nisi, proin amet nisi, vitae varius. Dictum lorem massa pellentesque lorem diam suspendisse.",
        },

        {
          imageSrc: "https://source.unsplash.com/random/300x300/?1",
          category: "Cruises",
          author: "Tia E. McLaren",
          title: "The ultimate Santa Cruz dream trip",
          link: "#",
          description: "In eu at rutrum mauris eget. Venenatis morbi mauris quis gravida fusce id.",
        },
        {
          imageSrc: "https://source.unsplash.com/random/300x300/?1",
          category: "On the road",
          author: "Angel V. Payne",
          title: "Explore a different way to travel",
          link: "#",
          description: "Quam eget sit eget neque imperdiet augue fermentum ac lorem. Volutpat turpis facilisis sed eget sagittis tellus fames faucibus.",
        },
        {
          imageSrc: "https://source.unsplash.com/random/300x300/?1",
          category: "Photography ",
          author: "Ed M. Appleton",
          title: "Discover Portugal — 30 inspire photos ",
          link: "#",
          description: "Nisi, proin amet nisi, vitae varius. Dictum lorem massa pellentesque lorem diam suspendisse.",
        },

      ],
    };
  },
};
</script>


<template>
  <main>
    <div class=" mx-auto ">
      <Banner />

      <swiper :cssMode="true" :navigation="true" :pagination="true" :mousewheel="true" :keyboard="true" :modules="modules"
        class="mySwiper ">
        <swiper-slide>
          <div class="">
            <NuxtImg src="/home/Image2.png" />
            <span class="text-block">
              <span class="textOne">Solo travel</span>
              <span class="textTwo mx-1">by</span>
              <span class="textThree">Clarence Bechtol</span>
            </span>
            <h5>7 things to do in Bali — a local’s guide and insider tips</h5>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="">
            <NuxtImg src="/home/Image2.png" />
            <span class="text-block">
              <span class="textOne">Solo travel</span>
              <span class="textTwo mx-1">by</span>
              <span class="textThree">Clarence Bechtol</span>
            </span>
            <h5>7 things to do in Bali — a local’s guide and insider tips</h5>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="">
            <NuxtImg src="/home/Image2.png" />
            <span class="text-block">
              <span class="textOne">Solo travel</span>
              <span class="textTwo mx-1">by</span>
              <span class="textThree">Clarence Bechtol</span>
            </span>
            <h5>7 things to do in Bali — a local’s guide and insider tips</h5>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="">
            <NuxtImg src="/home/Image2.png" />
            <span class="text-block">
              <span class="textOne">Solo travel</span>
              <span class="textTwo mx-1">by</span>
              <span class="textThree">Clarence Bechtol</span>
            </span>
            <h5>7 things to do in Bali — a local’s guide and insider tips</h5>
          </div>
        </swiper-slide>
      </swiper>

      <div class="category dark:text-gray-800 mt-7 border-t border-t-slate-400">
        <div class="container h-16 mx-auto md:justify-center md:space-x-8">
          <h2 class="text-3xl font-semibold lg:text-center dark:text-black mb-4">
            Choose a category
          </h2>
          <div class=" flex justify-between">
            <ul class="items-stretch hidden  md:flex ">
              <li class=" flex flex-col justify-center text-center">
                <div><img src="~/assets/images/home/category.png" alt=""></div>
                <span class="mt-2">Solo travel</span>
              </li>
              <li class="category-list flex flex-col justify-center text-center">
                <div><img src="~/assets/images/home/category.png" alt=""></div>
                <span class="mt-2">Solo travel</span>
              </li>
              <li class="category-list flex flex-col justify-center text-center">
                <div><img src="~/assets/images/home/category.png" alt=""></div>
                <span class="mt-2">Solo travel</span>
              </li>
              <li class="  category-list flex flex-col justify-center text-center">
                <div><img src="~/assets/images/home/category.png" alt=""></div>
                <span class="mt-2">Solo travel</span>
              </li>
              <li class="  category-list flex flex-col justify-center text-center">
                <div><img src="~/assets/images/home/category.png" alt=""></div>
                <span class="mt-2">Solo travel</span>
              </li>
              <li class="  category-list flex flex-col justify-center text-center">
                <div><img src="~/assets/images/home/category.png" alt=""></div>
                <span class="mt-2">Solo travel</span>
              </li>
              <li class="  category-list flex flex-col justify-center text-center">
                <div><img src="~/assets/images/home/category.png" alt=""></div>
                <span class="mt-2">Solo travel</span>
              </li>

            </ul>
          </div>
        </div>
      </div>
     
      <section class="py-6 feature">
        <div class="container max-w-screen-xl p-4 mx-auto sm:p-10">
          <div class="mb-12 space-y-4 text-center">
            <h1 class="text-4xl font-semibold leadi">Featured Explore</h1>
            <p class="px-4 sm:px-8 lg:px-24">Let’s make an interesting journey throughout our planet</p>
          </div>
          <div class="grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:grid-cols-3 lg:max-w-full">

            <FeatureCard v-for="feature in features" :key="feature.id" :imageSrc="feature.imageSrc"
              :category="feature.category" :author="feature.author" :title="feature.title" :link="feature.link"
              :description="feature.description" />
          </div>
        </div>
      </section>
      <section class="px-5 py-10 dark:bg-whote dark:text-gray-100">
        <div class="container grid grid-cols-12 max-w-screen-xl mx-auto gap-y-6 md:gap-10">
          <Popular/>
          <div class="popular-block hidden py-2 xl:col-span-3  lg:col-span-4 md:hidden lg:block">
          <PopularBlock/>
        </div>

          <PopularPagination/>
        </div>
      </section>
      <Subscribe/>
      <Follow/>
    </div>
  </main>
</template>

