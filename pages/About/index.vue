<template>
  <main>
    <div class="mx-auto ">
      <Banner />
      <BannerSide :title="dynamicTitle" :breadcrumbs="myBreadcrumbs" />

      <section class="py-6 px-28 dark:text-gray-800">
        <div class="container mx-auto">
          <div class="grid gap-6 my-16 lg:grid-cols-2">
            <div class="flex flex-col p-8 space-y-4 mt-10 ">
              <h4 class="">Hi, I’m Mangata</h4>
              <h5 class="mb-4">Tincidunt at suspendisse blandit vestibulum ipsum fringilla.</h5>
              <p>Tristique venenatis nunc sagittis pellentesque. Ipsum netus egestas enim, nunc aliquet donec tellus
                vitae.
                Faucibus vivamus purus purus praesent maecenas. Sed dui feugiat morbi feugiat eu orci. Cras in ultrices
                nulla et sed vitae at.

              </p>
              <p>Dui, at vitae, sem eget. Lobortis enim, suspendisse hac sed faucibus nec, sagittis. Nec in feugiat
                elementum
                ridiculus a nisl augue nam risus. Massa cursus fames semper nec. Aliquam sit posuere mattis morbi iaculis
                consequat neque. Arcu egestas pharetra, tellus eu, nunc cras eu. Arcu, mi eu et morbi sed ipsum et cras.
                Sapien ultricies tortor ac nisi, id augue tempor. Lobortis ipsum sed consectetur proin diam convallis.
                Orci
                sed ut porta egestas.</p>
            </div>
            <div class="flex flex-col p-8 space-y-4 ">
              <img src="~/assets/images/about/about.png" class="" alt="">
            </div>
          </div>
        </div>
      </section>

      <Follow />
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
        { label: 'About', separator: true },
      ]
    }
  }
}
</script>