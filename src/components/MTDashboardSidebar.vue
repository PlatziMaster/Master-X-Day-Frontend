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
        <div v-if="openSidebar" class="mx-auto">
          <div class="burger"></div>
          <div class="burger"></div>
          <div class="burger"></div>
        </div>

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
      class=" w-14  mt-4 mb-4 ml-4 bg-MTLightGreen flex flex-col jusfity-center content-center cursor-pointer"
      @click="openSidebar = !openSidebar"
    >
      <div v-if="openSidebar" class="mx-auto">
        <div class="burger"></div>
        <div class="burger"></div>
        <div class="burger"></div>
      </div>

      <div v-if="!openSidebar" class="mx-auto mt-2 mb-2">
        <span class="text-xl text-white font-bold">X</span>          
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

  <!--
  <div
    class="container bg-MTDarkGreen text-MTWhite lg:h-full lg:w-1/4 flex flex-col justify-start fixed lg:static "
    :class="visibility === 'hidden' ? 'w-auto h-auto' : 'w-full h-full'"
  >
    <div
      class="block lg:hidden px-4 py-2"
      :class="visibility === 'hidden' ? 'block' : 'hidden'"
    >
      <button v-on:click="visibility = 'block'">
        <div class="burger"></div>
        <div class="burger"></div>
        <div class="burger"></div>
      </button>
    </div>
    <div
      class="Sidebar__header w-full flex justify-end block lg:hidden"
      :class="visibility === 'hidden' ? 'hidden' : block"
    >
      <button
        v-on:click="visibility = 'hidden'"
        class="Sidebar__cross p-4 border-none bg-transparent h-full"
      >
        X
      </button>
    </div>

    <section
      class="flex flex-col items-center lg:block lg:h-full"
      :class="visibility === 'hidden' ? 'hidden' : 'w-full lg:w-auto'"
    >
      <img
        aria-label="Profile Image"
        class="my-8 h-32 w-32 rounded-full border-4 mx-auto"
        alt=""
        src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
      />

      <h2 class="my-4 text-xl font-bold">Team Members</h2>

      <div class="flex flex-col items-start">
        <ul class="my-0 list-disc">
          <li
            v-for="(member, index) in members"
            :key="index"
            class="my-2 text-base font-thin"
          >
            {{ member }}
          </li>
        </ul>
      </div>
    </section>
  </div>
  -->
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
  width: 35px;
  height: 5px;
  background-color: white;
  margin: 6px 0;
}
</style>
