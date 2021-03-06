import { Component, Vue } from 'vue-property-decorator';
import Card from '../components/card';

@Component({
  components: {
    Card,
  },
})
export default class Home extends Vue {
  created() {
    this.$nextTick(() => {
      console.log('kajsn');
    });
  }
}
