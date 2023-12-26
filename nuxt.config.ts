// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/style.css"],
  modules: ["@nuxtjs/tailwindcss", "nuxt-swiper", "@nuxt/image"],
  /**c'est un attribut de la librarie nuxt-image qui permet de referencer 
   * les images vers le dossier assets/images au lieu de la racine qui est 'public'
   * 
   **/
  image: {
    dir: "assets/images",
  },
});
