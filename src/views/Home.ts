import { Component, Vue } from 'vue-property-decorator';
import Column from '../components/column';
import Team from '../components/team';

@Component({
  components: {
    Column,
    Team,
  },
})

export default class Home extends Vue {
}
