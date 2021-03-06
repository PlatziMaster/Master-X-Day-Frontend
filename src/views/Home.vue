<template>
  <div class='home'>
    <Graphics :loaded='loaded' :todo="ttodo" :complete="tcompleted" :progress="tprogress" />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { testAPI } from '../api';
import Graphics from '../components/Graphics.vue';

export default {
  data() {
    return {
    	loaded: true,
    	tcompleted: 10,
    	tprogress: 5,
    	ttodo: 1,
    };
  },
  components: {
    Graphics,
  },
  created() {
    this.$nextTick(async () => {
		  const result = await testAPI();
		  console.log(result);
    });
  },
};
</script>
