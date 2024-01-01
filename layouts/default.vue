<script setup lang="ts"></script>

<template>
  <div class="min-h-screen">
    <div class="pb-6 ">
      <Header />
      <div>
        <slot />
      </div>
      <Footer />
    </div>
  </div>
</template>
