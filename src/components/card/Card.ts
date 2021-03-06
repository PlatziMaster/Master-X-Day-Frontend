import { Component, Vue } from 'vue-property-decorator';
import { testAPI } from '../../api';

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
  created() {
    this.$nextTick(async () => {
      const result = await testAPI();
      console.log(result);
    });
  }
}
