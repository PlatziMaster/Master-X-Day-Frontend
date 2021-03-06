<template>
  <NavBar />
  <div class="about pb-24 pt-12">
    <div class="text-white mb-12 text-center md:text-left md:ml-32">
      <h1 class="underline text-4xl font-bold mb-2">{{ board.name }}</h1>
      <h2 class="text-2xl font-bold">{{ lists.length }} Lists</h2>
      <h3 class="text-md">{{ totalCardsBoard }} Cards</h3>
    </div>
    <div class="w-full flex flex-col content-center ">

      <div class="grid grid-cols-1 gap-x-8 gap-y-8 mx-auto pb-8 ">
        <div class="hidden md:block">
          <MTDashboardCardLarge />
        </div>
        <div class="block md:hidden">
          <MTDashboardCardSmall />
        </div>

      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8 mx-auto">
        <MTDashboardCard
          v-for="list in lists"
          :key="list.id"
          :listName="list.name"
          :cardsNumber="list.cardsNumber"
          :id="list.id"
        />
        <!-- <MTDashboardCard listName="In Progress" cardsNumber="20" />
        <MTDashboardCard listName="Done" cardsNumber="10" /> -->
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import MTDashboardCard from "@/components/MTDashboardCard.vue";
import MTDashboardCardLarge from "@/components/MTDashboardCardLarge.vue";
import MTDashboardCardSmall from "@/components/MTDashboardCardSmall.vue";
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
    MTDashboardCard,
    MTDashboardCardLarge,
    MTDashboardCardSmall,
    NavBar,
  },
  data() {
    return { board: {}, members: [], totalCardsBoard: 0, lists: [] };
  },
  computed: {
    
  },
  created() {
    boardData(idBoard).then((board) => (this.board = board));
    members(idBoard).then((members) => (this.members = members));
    totalCardsBoard(idBoard).then((totalCardsBoard) => {
      this.totalCardsBoard = totalCardsBoard;
    });
    lists(idBoard).then((lists) => {
      this.lists = lists;
      this.loadCardsInList();
    });
  },
  methods: {
    loadCardsInList() {
      this.lists = this.lists.map(async (list) => {
        const cards = cardsInList(list.id);
        return {
          ...list,
          cards,
          cardsNumber: cards.reduce((acum) => (acum = acum + 1), 0),
        };
      });
    },
  },
};
</script>
