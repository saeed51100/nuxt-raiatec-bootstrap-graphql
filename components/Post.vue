<template>
  <NuxtLink :to='post.uri'>

        <h2 class="font-semibold text-2xl">{{ post.title }}</h2>
        <p>{{ new Date(post.date).toLocaleDateString() }}</p>

  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  post: Record<'title' | 'date' | 'excerpt' | 'uri', string>
}>();

</script>