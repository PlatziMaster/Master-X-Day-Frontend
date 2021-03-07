import { Component, Vue } from 'vue-property-decorator';
import API from '../api';
import Column from '../components/column';

interface List {
  id: string;
  cards: [];
  name: string;
}
@Component({
  components: {
    Column,
  },
})

export default class Home extends Vue {
  lists: any = [];

  totalTasks = 0;

  progress = 0;

  done = 0;

  boardName = '';

  created() {
    this.$nextTick(async () => {
      this.lists = await API.getListAndCategories();
      this.lists.forEach((element: List) => {
        this.totalTasks += element.cards.length;
      });
      this.lists.forEach((list: List) => {
        if (list.name === 'DONE') {
          this.done = list.cards.length;
        }
      });
      this.progress = ((this.totalTasks - this.done) * 100) / this.totalTasks;
      this.boardName = await API.getBoard();
    });
  }
}
