<template>
  <div
    class="transform top-0 left-0 w-full bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 xl:hidden bg-MTDarkGreen"
    :class="openSidebar ? 'hidden' : ''"
  >
    <div class="w-full bg-MTDarkGreen flex content-center block xl:hidden">
      <div
        class=" w-14  mt-4 mb-4 ml-4 bg-MTLightGreen flex flex-col jusfity-center content-center cursor-pointer"
        @click="openSidebar = !openSidebar"
      >
        <div v-if="!openSidebar" class="mx-auto mt-2 mb-2">
          <span class="text-xl text-white font-bold">X</span>          
        </div>
      </div>
    </div>

    <div class="w-full h-full bg-MTDarkGreen">
      <img
        aria-label="Profile Image"
        class="my-8 h-32 w-32 rounded-full border-4 mx-auto mt-24"
        alt=""
        src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
      />

      <h2 class="my-4 text-2xl font-bold text-MTWhite">Team Members</h2>

      <div class="flex flex-col items-start text-white ">
        <ul class="my-0 list-disc mx-auto">
          <li
            v-for="(member, index) in members"
            :key="index"
            class="my-2 text-base font-thin mx-auto"
          >
            {{ member }}
          </li>
        </ul>
      </div>
    </div>
  </div>
  
  <div class="w-full bg-MTDarkGreen flex content-center block xl:hidden">
    <div
      class="py-2 w-14 bg-MTLightGreen flex flex-col jusfity-center content-center cursor-pointer"
      @click="openSidebar = !openSidebar"
    >
      <div v-if="openSidebar" class="mx-auto">
        <div class="burger"></div>
        <div class="burger"></div>
        <div class="burger"></div>
        <div class="burger"></div>
      </div>
    </div>
  </div>

  <div class="w-1/4 h-screen bg-MTDarkGreen hidden xl:block">
    <img
      aria-label="Profile Image"
      class="my-8 h-32 w-32 rounded-full border-4 mx-auto mt-24"
      alt=""
      src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
    />

    <h2 class="my-4 text-2xl font-bold text-MTWhite">Team Members</h2>

    <div class="flex flex-col items-start text-white ">
      <ul class="my-0 list-disc mx-auto">
        <li
          v-for="(member, index) in members"
          :key="index"
          class="my-2 text-base font-thin mx-auto"
        >
          {{ member }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MTDashboardSidebar",
  props: {
    members: {
      type: Array,
      required: true,
    },
  },
  data: function() {
    return {
      openSidebar: true,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Sidebar__header {
  background-color: #020303;
}

.Sidebar__cross {
  background-color: #18202b;
}

.burger {
  width: 32px;
  height: 4px;
  background-color: white;
  margin: 4px 0;
  border-radius: 2px;
}
</style>
