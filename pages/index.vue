<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <TheHeader></TheHeader>
  <div class="m-5">
    <div class="btn btn-success">Success</div>
  </div>
  <div>
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
  </div>
</template>
