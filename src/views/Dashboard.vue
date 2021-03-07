<template>
  <NavBar />

  <div class="flex flex-col xl:flex-row w-full h-full">
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
          :percent="percent"
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

const DONE_LIST_NAME = 'Done';

import {
  lists,
  boardData,
  members,
  cardsBoard,
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
    return {
      board: {},
      members: [],
      totalCardsTodo: 0,
      totalCardsInProgress: 0,
      totalCardsDone: 0,
      listsData: [],
      cards: [],
      cardsDone: [],
      openSidebar: true,
    };
  },
  computed: {
    totalPercent(){
      return this.cardsDone / this.cards * 100;
    }
  },
  async created() {
    boardData(idBoard).then((board) => (this.board = board));
    members(idBoard).then((members) => (this.members = members));
    await cardsBoard(idBoard).then((cards) => {
      this.cards = cards;
      return lists(idBoard);
    })
    .then((lists) => {
        this.listsData = this.loadCardsInList(lists);
    });
    console.log(this.listsData);
  },
  methods: {
    loadCardsInList(lists) {
      const newList = lists.map((list) => {
        const cards = this.cards.filter(card => card.idList === list.id);
        if(list.name === DONE_LIST_NAME) {
          this.cardsDone = cards;
        }

        return {
          ...list,
          cardsNumber: cards.length,
        }
      });
      return newList.map(list => {
        const percent = list.cardsNumber/this.cards.length * 100;
        return {
          ...list,
          percent
        }
      })
    },
  },
};
</script>

<style>
.burger {
  width: 35px;
  height: 5px;
  background-color: white;
  margin: 6px 0;
}

.burgerSide{
  width: 35px;
  height: 5px;
  background-color: white;
  margin: 6px 0;

}

</style>
