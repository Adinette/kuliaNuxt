<template>
  <main>
    <div class="mx-auto ">
      <Banner />
      <BannerSide :title="dynamicTitle" :breadcrumbs="myBreadcrumbs" />
      <section class="p-20 dark:bg-whote dark:text-gray-100">
        <div class="container grid grid-cols-12 mx-auto gap-y-6 md:gap-10">
          <div class=" py-2 space-y-6  xl:col-span-8 lg:col-span-7 md:hidden lg:block">
            <div class="xl:col-span-8 lg:col-span-7 md:col-span-9 ">
              <PopularCard />
            </div>
            <div class="xl:col-span-8 lg:col-span-7 md:col-span-9 ">
              <PopularCard />
            </div>
            <div class="xl:col-span-8 lg:col-span-7 md:col-span-9 ">
              <PopularCard />
            </div>
            <div class="xl:col-span-8 lg:col-span-7 md:col-span-9 ">
              <PopularCard />
            </div>
            <div class="xl:col-span-8 lg:col-span-7 md:col-span-9 ">
              <PopularCard />
            </div>
          </div>
          <div class="popular-block hidden py-2 xl:col-span-4  lg:col-span-5 md:hidden lg:block">
            <PopularBlock1 />
          </div>

        </div>
        <PopularPagination />
      </section>

    </div>
  </main>
</template>

<script>
export default {
  computed: {
    dynamicTitle() {
      return this.$route.name; // No need to add "RightSide" here
    }
  },
  data() {
    return {
      myBreadcrumbs: [
        { to: '/', label: 'Home' },
        { label: 'Right SideBar', separator: true }, // Assuming this is the current page
      ]
    }
  }
}
</script>
