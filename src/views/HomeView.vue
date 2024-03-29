<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search" />
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>

    <button @click="handleClick">stop watch</button>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from "vue";
export default {
  name: "Home",
  setup() {
    const search = ref("");
    const names = ref(["goku", "vegita", "gohan", "picollo", "dean", "yamcha"]);

    const stopWatch = watch(search, () => {
      console.log("watch func ran");
    });

    const stopEffect = watchEffect(() => {
      console.log("watch effect func ran", search.value);
    });

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    const handleClick = () => {
      stopWatch();
      stopEffect();
    };
    return { names, search, matchingNames , handleClick};
  },
};
</script>