<template>
  <nav class="bg-MTBlack flex flex-row h-14 justify-between	">
    <div class="align-middle flex flex-wrap content-center h-full pl-6">
      <router-link to="/">
        <img
          id="MTlogo"
          src="https://i.imgur.com/OT8gRC0.png"
          alt="Drello"
          class="h-10"
        />
      </router-link>
      <h1
        class="text-white font-black text-lg pl-3 align-middle my-auto hidden sm:block"
      >
        Drello
      </h1>
    </div>
    <ul
      class="none text-white font-medium align-middle flex flex-wrap gap-x-6 content-center pr-6"
    >
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/dashboard">Dashboard</router-link>
      </li>
    </ul>
  </nav>
</template>
<script></script>
<style scoped lang="scss">
#MTlogo {
  max-height: 3em;
}
</style>
