<template>
    <main>
        <div class="mx-auto ">
            <BannerSide :title="dynamicTitle" :breadcrumbs="myBreadcrumbs" />

            <section class="p-12 ">
                <div
                    class="grid max-w-screen-xl grid-cols-1 gap-8 px-6 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 ">
                    <div class="">
                        <img src="~/assets/images/contact/contact.png" alt="" style="height: 500px;" class="w-full md:h-64">
                    </div>
                    <div>
                        <div>
                            <h4 class="mb-3">Contact</h4>
                            <div class="flex"> 
                                <ul >
                                    <li>
                                        <h6> E-mail</h6>
                                        <span class="textOne">info@yourdomain.com</span>
                                    </li>
                                    <li class="contact-list mt-4">
                                        <h6> Telephone</h6>
                                        <span>555-58363-554</span>
                                    </li>
                                </ul>
                                <ul class="ml-12">
                                    <li class="contact-list">
                                        <h6> United States</h6>
                                        <span>1132 Farland Avenue Mcqueeney, TX 78123</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <form novalidate="" class=" my-6 space-y-6">
                            <h6 class="text-xl font-semibold text-black mb-6">Write us a message:</h6>
                            <div>
                                <input id="name" type="text" placeholder="Full name"
                                    class="w-full p-3 rounded  border border-slate-300">
                            </div>
                            <div>
                                <input id="email" type="email" placeholder="Email"
                                    class="w-full p-3 rounded border border-slate-300">
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
                { label: 'Contact', separator: true },
            ]
        }
    }
}
</script>
    