<template>
    <span class="text-block">
        <span class="textOne">{{ category }}</span>
        <span class="textTwo mx-1">by</span>
        <span class="textThree">{{ author }}</span>
    </span>
    <h2 class="text-2xl text-black font-semibold leadi">{{title  }}</h2>
    <p class="mt-4 mb-8 text-slate-600 text-sm">{{description}}</p>
</template>
<script>
export default {
    props: {
        
        category: {
            type: String,
            default: '',
        },
        author: {
            type: String,
            default: '',
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            default: '',
        },
    },
};
</script>
  