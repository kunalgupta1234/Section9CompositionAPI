<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <post-list :posts="postsWithTag" />
    </div>
    <div v-else>
      <SpinnerView />
    </div>
  </div>
</template>

<script>
import SpinnerView from "../components/SpinnerView.vue";
import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts";
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  components: { PostList, SpinnerView },
  setup() {
    const route = useRoute();
    const { posts, error, load } = getPosts();

    load();

    const postsWithTag = computed(() => {
      return posts.value.filter((p) => p.tags.includes(route.params.tag));
    });

    return { error, posts, postsWithTag };
  },
};
</script>

<style>
</style>