
<template>
    <div class="xl:col-span-9 lg:col-span-8 md:col-span-9 ">

        <div class="grid grid-cols-12 mx-auto my-6 gap-y-6 md:gap-10">
            <PopularImage />
            <div class="xl:col-span-6 lg:col-span-6">
                <PopularContent v-for="popular in populars" :key="popular.id" :category="popular.category"
                    :author="popular.author" :title="popular.title" :description="popular.description" />
            </div>
        </div>

        <div class="grid grid-cols-12 mx-auto my-6 gap-y-6 md:gap-10">
            <PopularImage />
            <div class="xl:col-span-6 lg:col-span-6">
                <PopularContent v-for="popular in populars" :key="popular.id" :category="popular.category"
                    :author="popular.author" :title="popular.title" :description="popular.description" />
            </div>
        </div>

        <div class="grid grid-cols-12 mx-auto my-6 gap-y-6 md:gap-10">
            <PopularImage />
            <div class="xl:col-span-6 lg:col-span-6">
                <PopularContent v-for="popular in populars" :key="popular.id" :category="popular.category"
                    :author="popular.author" :title="popular.title" :description="popular.description" />
            </div>
        </div>

        <div class="grid grid-cols-12 mx-auto my-6 gap-y-6 md:gap-10">
            <PopularImage />
            <div class="xl:col-span-6 lg:col-span-6">
                <PopularContent v-for="popular in populars" :key="popular.id" :category="popular.category"
                    :author="popular.author" :title="popular.title" :description="popular.description" />
            </div>
        </div>

        <div class="grid grid-cols-12 mx-auto mt-6 gap-y-6 md:gap-10">
            <PopularImage />
            <div class="xl:col-span-6 lg:col-span-6">
                <PopularContent v-for="popular in populars" :key="popular.id" :category="popular.category"
                    :author="popular.author" :title="popular.title" :description="popular.description" />
            </div>
        </div>

    </div>
</template>
<script>
import PopularContent from "../popular/PopularContent.vue"

export default {
    components: {
        PopularContent,
    },
    setup() {
        return {

            populars: [
                {
                    category: "Solo travel",
                    author: "Ed M. Appleton",
                    title: "The Golden Sands Of Florida And California",
                    description: "Nisi, proin amet nisi, vitae varius. Dictum lorem massa pellentesque lorem diam suspendisse.",
                },
                // {
                //     category: "Cruises",
                //     author: "Tia E. McLaren",
                //     title: "Budget Trip Doesn’t Mean Boring",
                //     description: "In eu at rutrum mauris eget. Venenatis morbi mauris quis gravida fusce id.",
                // },
            ],
        };
    },
};
</script>