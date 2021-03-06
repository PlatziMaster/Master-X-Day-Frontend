import { Component, Vue } from 'vue-property-decorator';
import Column from '../components/column';

@Component({
  components: {
    Column,
  },
})

export default class Home extends Vue {
}
