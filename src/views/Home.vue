<template>
  <div class="home">
    <NavBar />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/MTNavBar.vue";

export default {
  name: "Home",
  components: {
    NavBar
  }
};
</script>
