<template>
  <div class="home">
    <h1>Home</h1>
    <PostList v-if="showPost" :posts="posts" />
    <button @click="showPost = !showPost">toggle post</button>
    <button @click="posts.pop()">delete a post</button>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import { ref } from "vue";

export default {
  name: "Home",
  components: { PostList },
  setup() {
    const posts = ref([
      {
        title: "welcome to the blog",
        body: "Lorem ipsum 100Lorem ipsum 100Lorem ipsum 100Lorem ipsum 100Lorem ipsum 100Lorem ipsum 100Lorem ipsum 100Lorem ipsum 100Lorem ipsum 100Lorem ipsum 100Lorem ipsum 100Lorem ipsum 100Lorem ipsum 100Lorem ipsum 100Lorem ipsum 100Lorem ipsum 100Lorem ipsum 100Lorem ipsum 100Lorem ipsum 100Lorem ipsum 100Lorem ipsum 100Lorem ipsum 100Lorem ipsum 100Lorem ipsum 100Lorem ipsum 100Lorem ipsum 100Lorem ipsum 100Lorem ipsum 100Lorem ipsum 100",
        id: 1,
      },
      { title: "top 5 CSS tips", body: "lorem ipsum", id: 2 },
    ]);

    const showPost = ref(true);

    return { posts, showPost };
  },
};
</script>