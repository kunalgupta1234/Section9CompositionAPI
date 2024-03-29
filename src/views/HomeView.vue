<template>
  <div class="home">
    home
    <p>My name is {{ name }} and age is {{ age }}</p>
    <button @click="handleClick">click</button>
    <button @click="age++">add 1 to age</button>
    <input type="text" v-model="name" />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "HomeView",
  setup() {
    // const p = ref('hello');

    const name = ref("mario");
    const age = ref(30);

    const handleClick = () => {
      name.value = "luigi";
      age.value = 40;
    };

    return { name, age, handleClick };
  },
};
</script>
