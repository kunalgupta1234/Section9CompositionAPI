<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from "vue";
import SinglePost from "./SinglePost.vue";
export default {
  props: ["posts"],
  components: { SinglePost },
  setup(props) {
    onMounted(() => console.log("componnt mounted"));
    onUnmounted(() => console.log("componnt unmounted"));
    onUpdated(() => console.log("componnt updated"));
  },
};
</script>

<style>
</style>