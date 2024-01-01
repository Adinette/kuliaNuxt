

<template>
        <div class="flex flex-col overflow-hidden ">
            <div class="max-w-lg p-4  ">
                <div class="space-y-4">
                    <div class="space-y-2">
                        <img :src="imageSrc"  alt=""
                            class="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500">
                        <div class="flex items-center text-xs">
                            <span class="text-block">
                                <span class="textOne">{{ category }}</span>
                                <span class="textTwo mx-1">by</span>
                                <span class="textThree">{{ author }}</span>
                            </span>
                        </div>
                    </div>
                    <div class="space-y-2">
                        <a rel="noopener noreferrer" :href="link" class="block">
                            <h3 class="text-xl font-semibold dark:text-black">{{ title }}</h3>
                        </a>
                        <p class="leadi dark:text-black">{{ description }}</p>
                    </div>
                </div>
            </div>
        </div>
</template>
  
<script>
export default {
    props: {
        imageSrc: {
            type: String,
            required: true,
        },
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
        link: {
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
  