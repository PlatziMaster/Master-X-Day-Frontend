import Vue from 'vue';
import Component from 'vue-class-component';
import Member from '../member';
import API from '../../api';

@Component({
  components: {
    member: Member,
  },
})

export default class Team extends Vue {
members = '';

created() {
  this.$nextTick(async () => {
    this.members = await API.getMembers();
  });
}
}
