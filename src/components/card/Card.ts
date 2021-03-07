import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
  props: {
    taskName: String,
    dueDate: String,
    labels: Array,
  },
})

export default class Card extends Vue {}
