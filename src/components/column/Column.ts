import Card from '../card';

export default {
  data() {
    return {
      cards: [
        { taskName: 'name' },
      ],
    };
  },
  props: {
    columnName: String,
    // cards: Array,
    counter: Number,
    progress: Number,
  },
  components: {
    card: Card,
  },
};
