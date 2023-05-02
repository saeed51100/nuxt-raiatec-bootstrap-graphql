<script setup lang="ts">
const route = useRoute()
const config = useRuntimeConfig();
const {data, refresh, pending} = await useFetch(config.public.wordpressUrl, {
  method: 'post',
  body: {
    query: `
      query NewQuery {
        posts(first:10){
          nodes {
            title
            date
            excerpt
            uri
          }
        }
      }`
  },
  transform(data) {
    return data.data.posts.nodes as Array<Record<'title' | 'date' | 'excerpt' | 'uri', string>>;
  }
});
</script>

<template>
  <TheHeader></TheHeader>
  <div class="m-5">
    <div class="btn btn-success">Success</div>
  </div>
  <div>
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <Post v-for="post in data" :key="post.uri" :post="post"></Post>
  </div>
</template>
