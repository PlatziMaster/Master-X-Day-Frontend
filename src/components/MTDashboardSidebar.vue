<template>
  <div class="container bg-MTDarkGreen text-MTWhite w-auto lg:w-1/4 h-auto lg:h-full px-4 py-2 flex justify-center fixed lg:static">
    <div class="block lg:hidden">
      <button>Burger</button>
    </div>

    <section class="flex flex-col items-center w-screen hidden lg:block">
      <div class="py-2 flex justify-end">
        <button class="bg-MTDarkGreen">X</button>
      </div>

      <img 
        aria-label="Profile Image"
        class="my-8 h-32 w-32 rounded-full border-4"
        alt=""
        src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
      />

      <h2 class="my-4 text-xl font-bold">Team Members</h2>

      <div class="flex flex-col items-start">
        <ul class="my-0 list-disc">
          <li v-for="(member, index) in members"
            :key="index"
            class="my-2 text-base font-thin"
            >
            {{ member }}
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "MTDashboardSidebar",
  props: {
    members: {
      type: Array,
      required: true,
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
