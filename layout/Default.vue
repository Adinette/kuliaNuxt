<template>
    <Header />
    <div>
        <slot />
    </div>
    <Footer />
</template>
  
<script setup>
import Header from '../component/global/Header.vue';
import Footer from '../component/global/Footer.vue';

</script>