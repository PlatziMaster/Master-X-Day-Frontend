<template>
  <div class='graphics'>
    <div class="container-graph">
    	<div class="todo">
    		<Graphics :loaded='loaded' :Pmayor="pmayor" :Pmenor="pmenor" :labelg="labelt"/>
    	</div>
    	<div class="inprogress">
    		<Graphics :loaded='loaded' :Pmayor="pmayor" :Pmenor="pmenor" :labelg="labelp"/>
    	</div>
    	<div class="completed">
    		<Graphics :loaded='loaded' :Pmayor="pmayor" :Pmenor="pmenor" :labelg="labelc"/>
    	</div>
    </div>
  </div>
</template>

<script lang='ts'>
import Graphics from '../components/Graphics.vue';
import getListAndCategories from '../api/index';

export default {
  data() {
    return {
    	loaded: true,
    	pmayor: 10,
    	pmenor: 5,
    	labelt: 'TO-DO',
    	labelp: 'IN-PROGRESS',
    	labelc: 'DONE',
    };
  },
  components: {
  	Graphics,
  },
  // async mounted () {
  //   // this.loaded = false
  //   // try {
  //   //   const { userlist } = await fetch('/api/userlist')
  //   //   this.chartdata = userlist
  //   //   this.loaded = true
  //   // } catch (e) {
  //   //   console.error(e)
  //   // }
  // },
  created() {
    this.$nextTick(async () => {
      const result = await getListAndCategories();
      console.log(result);
    });
  },
};
</script>
<style>
	.container-graph {
		display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
	}
  .todo, .inprogress, .completed {
    width: 20%;
  }
  @media only screen and (max-width: 600px){
      .container-graph {
        flex-direction: column;
      }

      .todo, .inprogress, .completed {
        width: 100%;
      }
  }
</style>
