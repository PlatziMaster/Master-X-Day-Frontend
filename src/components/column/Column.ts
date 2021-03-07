import { Component, Vue } from 'vue-property-decorator';
import Card from '../card';

@Component({
  components: {
    card: Card,
  },
  props: {
    columnName: String,
    cards: Array,
    counter: Number,
    totalTasks: Number,
    progress: Number,
  },
})

export default class Column extends Vue {
}
