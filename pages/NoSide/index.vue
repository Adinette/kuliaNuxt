<template>
  <main>
    <div class="mx-auto ">
      <Banner />
      <BannerSide :title="dynamicTitle" :breadcrumbs="myBreadcrumbs" />
      <section class="px-32 dark:bg-whote dark:text-gray-100">
        <div class="container grid grid-cols-1 mx-auto gap-y-6 ">
          <div class="space-y-6  xl:col-span-8 lg:col-span-7 md:hidden lg:block">
            <div class="xl:col-span-8  lg:col-span-7 md:col-span-9 ">
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
        </div>
        <PopularPagination />
      </section>
      <Follow/>
    </div>
  </main>
</template>
<script>
export default {
  computed: {
    dynamicTitle() {
      return this.$route.name;
    }
  },
  data() {
    return {
      myBreadcrumbs: [
        { to: '/', label: 'Home' },
        { label: 'No SideBar', separator: true },
      ]
    }
  }
}
</script>