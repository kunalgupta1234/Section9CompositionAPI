<template>
  <div class="home">
    home
    <p ref="p">My name is {{ name }} and age is {{ age }}</p>
    <button @click="handleClick">click</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "HomeView",
  setup() {
    console.log(this);

    const p = ref('hello');

    let name = "mario";
    let age = 30;

    const handleClick = () => {
      console.log(p, p.value);
      p.value.classList.add('test')
      p.value.textContent = "Helo ninjas"
    };

    return { name, age, handleClick, p };
  },
};
</script>
