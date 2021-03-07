import { Component, Vue } from 'vue-property-decorator';
import { testAPI } from '../api';
import Column from '../components/column';
import Team from '../components/team';

@Component({
  components: {
    Column,
    Team,
  },
})

export default class Home extends Vue {
  created() {
    this.$nextTick(async () => {
      const result = await testAPI();
      console.log(result);
    });
  }
}
