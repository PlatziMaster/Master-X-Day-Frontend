import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
  props: {
    taskName: String,
    dueDate: String,
    labels: [],
    description: String,
  },
})

export default class Card extends Vue {

}
