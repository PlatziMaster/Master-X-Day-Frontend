<template>
  <div class="container py-5">
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
        <div class="row">
      <div :key="list.id" v-for="list in lists" class="col-lg-4 col-md-4 col-sm-12 col-12">
        <column
          :columnName="list.name"
          :cards="list.cards"
          :counter="list.cards.length"
          :totalTasks="totalTasks"
          :progress="((list.cards.length) * 100) / totalTasks"
          />
      </div>
    </div>
      </div>
      <div id="graphics" class="tab-pane fade">
         <GraphicPage />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h1>Board: {{ boardName.name }}</h1>
      </div>
    </div>
    <div class="row py-3">
      <div class="col text-right">
        <p>Total Project Progress: {{ progress }}%</p>
      </div>
    </div>
  </div>
</template>
<script lang='ts' src='./Home.ts'>
</script>
<style lang='css' src='./Home.ts'/>
