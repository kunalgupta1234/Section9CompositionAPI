<template>
  <div class="home">
    home
    <p>My name is {{ name }} and age is {{ age }}</p>
    <button @click="handleClick">click</button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  setup() {
    let name = "mario";
    let age = 30;

    const handleClick = () => {
      console.log("you clicked me");
    };

    return { name, age, handleClick };
  },
};
</script>
