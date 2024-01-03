<template>
  <main>
    <div class="mx-auto ">
      <Banner />
      <BannerSide :title="dynamicTitle" :breadcrumbs="myBreadcrumbs" />
      <section class="py-6 my-6 ">
        <div class="container max-w-screen-xl p-4 mx-auto sm:p-10">
          <div class="mb-12 space-y-4 text-center">
            <h1 class="text-4xl font-semibold leadi">Featured Explore</h1>
            <p class="px-4 sm:px-8 lg:px-24">Let’s make an interesting journey throughout our planet</p>
          </div>
          <div class="grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:grid-cols-3 lg:max-w-full">

            <FeatureCard v-for="feature in features" :key="feature.id" :imageSrc="feature.imageSrc"
              :category="feature.category" :author="feature.author" :title="feature.title" :link="feature.link"
              :description="feature.description" 
              />

            <FeatureCard v-for="feature in features" :key="feature.id" :imageSrc="feature.imageSrc"
              :category="feature.category" :author="feature.author" :title="feature.title" :link="feature.link"
              :description="feature.description" />
          </div>
          <PopularPagination/>
        </div>
      </section>
      <Follow />
    </div>
  </main>
</template>
<script>
import FeatureCard from '../components/feature/FeatureCard.vue';

export default {
  components: {
    FeatureCard,
  },
  computed: {
    dynamicTitle() {
      return this.$route.name;
    }
  },
  data() {
    return {
      myBreadcrumbs: [
        { to: '/', label: 'Home' },
        { label: 'Blog', separator: true },
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
  }
}
</script>
