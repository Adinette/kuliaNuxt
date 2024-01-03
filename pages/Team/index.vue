<template>
  <main>
    <div class="mx-auto ">
      <Banner />
      <BannerSide :description="dynamicdescription" :breadcrumbs="myBreadcrumbs" />
      <section class="py-6 ">
        <div class="container p-4 mx-auto space-y-16 sm:p-10">
          <div class="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          <Team v-for="team in teams" :key="team.id" :imageSrc="team.imageSrc"
              :name="team.name" :role="team.role" :description="team.description" />
          </div>
        </div>
      </section>
      <Subscribe/>
      <Follow />
    </div>
  </main>
</template>
<script>
import Team from "../../components/team/Team.vue"
export default {
  computed: {
    dynamicdescription() {
      return this.$route.name;
    }
  },
  components:{
      Team,
    },
  data() {
    return {
      myBreadcrumbs: [
        { to: '/', label: 'Home' },
        { label: 'Team', separator: true },
      ],
      teams: [
        {
          imageSrc: "https://source.unsplash.com/random/300x300/?1",
          name: "Solo travel",
          role: "Ed M. Appleton",
          description: "The Golden Sands Of Florida And California",
           },
        {
          imageSrc: "https://source.unsplash.com/random/300x300/?1",
          name: "Cruises",
          role: "Tia E. McLaren",
          description: "Budget Trip Doesn’t Mean Boring",
            },
        {
          imageSrc: "https://source.unsplash.com/random/300x300/?1",
          name: "On the road",
          role: "Angel V. Payne",
          description: "5 places to visit this Summer",
         },

        {
          imageSrc: "https://source.unsplash.com/random/300x300/?1",
          name: "Cruises",
          role: "Tia E. McLaren",
          description: "The ultimate Santa Cruz dream trip",
        },
        {
          imageSrc: "https://source.unsplash.com/random/300x300/?1",
          name: "On the road",
          role: "Angel V. Payne",
          description: "Explore a different way to travel",
       },
        {
          imageSrc: "https://source.unsplash.com/random/300x300/?1",
          name: "Photography ",
          role: "Ed M. Appleton",
          description: "Discover Portugal — 30 inspire photos ",
        },
        {
          imageSrc: "https://source.unsplash.com/random/300x300/?1",
          name: "On the road",
          role: "Angel V. Payne",
          description: "Explore a different way to travel",
       },
        {
          imageSrc: "https://source.unsplash.com/random/300x300/?1",
          name: "Photography ",
          role: "Ed M. Appleton",
          description: "Discover Portugal — 30 inspire photos ",
        },
      ]
    }
  }
}
</script>
