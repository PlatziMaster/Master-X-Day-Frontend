<template>
  <div class='home'>
    <img alt='Vue logo' src='../assets/logo.png' />
    <column columnName='To Do'/>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { testAPI } from '../api';
import Column from '../components/column';

@Component({
  components: {
    column: Column,
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
</script>
