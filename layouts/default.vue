<script setup lang="ts"></script>

<template>
  <div class="min-h-screen dark:bg-gray-800 dark:text-gray-100">
    <div class="p-6 space-y-8">
      <GlobalHeader />
      <div>
        <slot />
      </div>
      <GlobalFooter />
    </div>
  </div>
</template>
