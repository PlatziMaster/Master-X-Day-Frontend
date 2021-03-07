<template>
  <NavBar />

  <div class="flex flex-col md:flex-row  w-full h-full">
    <div class="w-1/4 h-screen bg-MTDarkGreen hidden xl:block">
      <!-- <MTDashboardSidebar /> -->
      <img 
        aria-label="Profile Image"
        class="my-8 h-32 w-32 rounded-full border-4 mx-auto mt-24"
        alt=""
        src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
      />

      <h2 class="my-4 text-2xl font-bold text-MTWhite">Team Members</h2>

      <div class="flex flex-col items-start text-white ">
        <ul class="my-0 list-disc mx-auto">
          <li v-for="(member, index) in members"
            :key="index"
            class="my-2 text-base font-thin mx-auto"
            >
            {{ member }}
          </li>
        </ul>
      </div>
    </div>
    <div class="w-full xl:w-3/4 ">
      <div class="about pb-24 pt-12">
        <div class="text-white mb-12 text-center md:text-left md:ml-32">
          <h1 class="underline text-4xl font-bold mb-2">{{ board.name }}</h1>
          <h2 class="text-2xl font-bold">{{ listsData.length }} Lists</h2>
          <h3 class="text-md">{{ totalCardsBoard }} Cards</h3>
        </div>
        <div class="w-full flex flex-col content-center ">
          <div class="grid grid-cols-1 gap-x-8 gap-y-8 mx-auto pb-8 ">
            <div class="hidden md:block">
              <!-- <MTDashboardCardLarge /> -->
            </div>
            <div class="block md:hidden">
              <!-- <MTDashboardCardSmall /> -->
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8 mx-auto">
            <MTDashboardCard
              v-for="item in listsData"
              :key="item.id"
              :listName="item.name"
              :cardsNumber="item.cardsNumber"
              :id="item.id"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
/* import MTDashboardSidebar from "@/components/MTDashboardSidebar.vue"; */
import MTDashboardCard from "@/components/MTDashboardCard.vue";
// import MTDashboardCardLarge from "@/components/MTDashboardCardLarge.vue";
// import MTDashboardCardSmall from "@/components/MTDashboardCardSmall.vue";
import NavBar from "@/components/MTNavBar.vue";

import {
  lists,
  boardData,
  members,
  totalCardsBoard,
  cardsInList,
} from "@/api/trello.service.js";

const idBoard = "6043b76b2ab9f31967290262";

export default {
  name: "Dashboard",
  components: {
    /* MTDashboardSidebar, */
    MTDashboardCard,
    // MTDashboardCardLarge,
    // MTDashboardCardSmall,
    NavBar,
  },
  data() {
    return { board: {}, members: [], totalCardsBoard: 0, listsData: [] };
  },
  computed: {},
  created() {
    boardData(idBoard).then((board) => (this.board = board));
    members(idBoard).then((members) => (this.members = members));
    totalCardsBoard(idBoard).then((totalCardsBoard) => {
      this.totalCardsBoard = totalCardsBoard;
    });
    lists(idBoard).then(async (lists) => {
      this.listsData = lists;
      await this.loadCardsInList();
    });
  },
  methods: {
    async loadCardsInList() {
      this.listsData.map(async (list) => {
        const newList = await cardsInList(list.id).then((cards) => {
          return {
            ...list,
            cards: cards,
            cardsNumber: cards.reduce((acum) => (acum = acum + 1), 0),
          };
        });
        console.log(newList);
        return newList;
      });
    },
  },
};
</script>
