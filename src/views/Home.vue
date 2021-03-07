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
        <Team />
        <Column />
      </div>
      <div id="graphics" class="tab-pane fade">
         <GraphicPage />
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import Column from '../components/column';
import Team from '../components/team';
import GraphicPage from './GraphicsPage.vue';

@Component({
  components: {
    GraphicPage,
    Column,
    Team,
  },
})
export default class Home extends Vue {}
</script>

<style scoped>
.nav-tabs .nav-link {
  color: #388E3C ;
}
.nav-tabs .nav-link.active {
  color: #212121 ;
}
</style>
