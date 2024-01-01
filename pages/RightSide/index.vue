<template>
    <main>
      <div class=" mx-auto ">
        <Banner />
        <BannerSide/>
        <section class="px-5 py-10 dark:bg-whote dark:text-gray-100">
        <div class="container grid grid-cols-12  mx-auto gap-y-6 md:gap-10">
          <PopularCard/>
          <div class="popular-block hidden py-2 xl:col-span-4  lg:col-span-5 md:hidden lg:block">
          <PopularBlock/>
        </div>
          
        </div>
        <PopularPagination/>
      </section>
        
      </div>
    </main>
  </template>

<script>

</script>