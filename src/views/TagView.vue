<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <post-list :posts="postsWithTag" />
      <TagCloud :posts="posts"/>
    </div>
    <div v-else>
      <SpinnerView />
    </div>
  </div>
</template>

<script>
import SpinnerView from "../components/SpinnerView.vue";
import PostList from "../components/PostList.vue";
import TagCloud from "../components/TagCloud.vue";
import getPosts from "../composables/getPosts";
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  components: { PostList, SpinnerView,TagCloud },
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