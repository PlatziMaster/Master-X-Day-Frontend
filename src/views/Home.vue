<template>
  <div class="home">
    <NavBar />
    <div
      class="grid grid-col-1 mx-auto w-1/3 justify-center content-center mt-20"
    >
      <img
        alt="Vue logo"
        src="https://i.imgur.com/OT8gRC0.png"
        class="w-36 mx-auto"
      />
      <div class="mb-8 mt-8">
        <h1 class="text-4xl text-MTWhite">Drello</h1>
        <p class="text-MTWhite text-md mt-2">
          ¡Welcome to the your new favorite <br> Trello cards progress dashboard!
        </p>
      </div>
      <router-link to="/dashboard">
        <div
          class="bg-MTLightGreen	rounded-full w-28 pt-2 pb-2 pl-4 pr-4 text-white mx-auto mb-4"
        >
          Login
        </div>
      </router-link>
      <a
        href="https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/"
        class="text-xs text-MTLightBlue"
        >¿Need some help?</a
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/MTNavBar.vue";

export default {
  name: "Home",
  components: {
    NavBar,
  },
};
</script>
