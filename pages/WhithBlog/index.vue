<template>
    <div class="mx-auto ">
      <Banner />
      <BannerSide :title="dynamicTitle" :breadcrumbs="myBreadcrumbs" />
      <section class="py-20 px-32 dark:bg-whote dark:text-gray-100">
        <div class="container grid grid-cols-1 mx-auto gap-y-6 ">
          <div class="space-y-6  xl:col-span-8 lg:col-span-7 md:hidden lg:block">
            <Blog />
          </div>
        </div>
      </section>
      <Comment />
      <FormComment />
      <section class="py-6 my-6 ">
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
    <Follow/>
    </div>
  </template>
  <script>
  import FeatureCard from "../../components/feature/FeatureCard"
  export default {
    computed: {
      dynamicTitle() {
        return this.$route.name; // No need to add "RightSide" here
      }
    },
    components: {
      FeatureCard,
    },
    data() {
      return {
        myBreadcrumbs: [
          { to: '/', label: 'Home' },
          { label: 'Whith BlogPost', separator: true }, // Assuming this is the current page
        ],
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
        ]
      }
    }
  }
  </script>
  