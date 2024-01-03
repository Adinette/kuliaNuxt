<template>
	<nav aria-label="breadcrumb" class="w-full p-12 dark:bg-slate-200 dark:text-gray-100">
	  <ol class="flex justify-center mb-4 h-8 space-x-2 dark:text-gray-100">
		<li v-for="item in breadcrumbs" :key="item.label" >
          <router-link v-if="item.to" :to="item.to" class="text-orange-500">{{ item.label }}</router-link>
          <a v-else :href="item.href"> / {{ item.label }}</a>
      </li>

	  </ol>
	  <h2 class="text-3xl font-medium lg:text-center dark:text-black mb-4">
		{{ title }}
	  </h2>
	</nav>
  </template>
  
  <script>
  export default {
	props: {
	  title: {
		type: String,
		required: true,
	  },
	  breadcrumbs: {
		type: Array,
		default: () => [],
	  },
	},
  };
  </script>
  