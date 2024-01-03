<template>
    <main>
        <div class="mx-auto ">
            <BannerSide :title="dynamicTitle" :breadcrumbs="myBreadcrumbs" />

            <section class="p-12 ">
                <div
                    class="grid max-w-screen-xl grid-cols-1 gap-8 px-6 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 ">
                    <div class="">
                        <img src="~/assets/images/getInTouch/getInTouch.png" alt="" class="w-full ">
                    </div>
                    <div>
                        <h4 class="text-black font-semibold mb-3">Get in touch</h4>
                        <span class="text-black text-lg">Lorem ipsum dolor sit amet, nec admodum intellegat
                            teu, ad vim solum percipitur, duo in ullum pertinax.
                            Et
                            nihil ceteros consequat pro, sed in debetpersequeris.</span>
                        <div class="my-4">
                            <p class=" text-base text-orange-500"> 44 Timms Drive</p>
                            <p class=" text-base text-orange-500">WONBOYN NSW 2551</p>
                        </div>
                        <form novalidate="" class="space-y-6">
                            <h6 class="text-xl font-semibold text-black mb-6">Write us a message:</h6>
                            <div class="flex">
                                <div>
                                    <input id="name" type="text" placeholder="Full name"
                                        class="w-full p-3 rounded  border border-slate-300">
                                </div>
                                <div class="ml-3">
                                    <input id="email" type="email" placeholder="Email"
                                        class="w-full p-3 rounded border border-slate-300">
                                </div>
                            </div>
                            <div>
                                <textarea id="message" rows="3" placeholder="Message"
                                    class="w-full p-3 rounded border border-slate-300"></textarea>
                            </div>
                            <button type="submit"
                                class="w-full p-3 text-sm font-bold tracki uppercase rounded dark:bg-orange-500 dark:text-gray-900">Send
                                Message</button>
                        </form>
                    </div>
                </div>
            </section>
            <Subscribe />
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
                { label: 'GetIn Touch', separator: true },
            ]
        }
    }
}
</script>
    