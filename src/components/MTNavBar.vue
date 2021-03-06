<template>
  <nav class="bg-MTBlack">
    <div class="align-middle">
      <img id="MTlogo" src="../assets/logo.png" alt="" class="" />
      <h1 class="text-white font-black text-lg">{{ nameApp }} Drello</h1>
    </div>
    <ul class="none text-white font-medium align-middle">
      <li>
        <router-link to="/">{{ home }} home</router-link>
      </li>
      <li>
        <router-link to="/dashboard">{{ dashboard }} dashboard</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  nameApp: "Drello",
  home: "Home",
  dashboard: "dashboard",
};
</script>
<style scoped lang="scss">
#MTlogo {
  max-height: 3em;
}
</style>
