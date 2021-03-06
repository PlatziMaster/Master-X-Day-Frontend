import Vue from 'vue'
import Component from 'vue-class-component'
import Member from '../member'
import {getMembers} from '../../api'

@Component({
    components: {},
    props: {
      name: String,
      image: String,
    },
  })

export class Team extends Vue {
members = '';
created() {
    this.$nextTick(async () => {
      this.members = await getMembers();
    });
  }

}