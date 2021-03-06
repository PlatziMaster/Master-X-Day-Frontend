<template>
  <div class="home container">
    <ul class="nav nav-tabs nav-fill">
      <li class="nav-item">
        <a class="nav-link active" data-toggle="tab" href="#board">Board</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#graphics">Graphics</a>
      </li>
    </ul>

    <div class="tab-content">
      <div id="board" class="tab-pane fade in active show">
        <!-- Board content -->
      </div>
      <div id="graphics" class="tab-pane fade">
         <!-- Graphics content -->
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { testAPI } from '../api';

@Component({
  components: {},
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

<style scoped>
.nav-tabs .nav-link {
  color: #388E3C ;
}
.nav-tabs .nav-link.active {
  color: #212121 ;
}
</style>
