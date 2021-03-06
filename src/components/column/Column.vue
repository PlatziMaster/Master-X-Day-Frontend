<template>
<section>
  <h2>{{columnName}}</h2>
  <div class="card">
    <div class="progress-bar">
      <div :style="{width:progress + '%'}"></div>
    </div>
    <div class="content">
      <ul>
        <card v-for="card in cards" :key="card.id"
          taskName='card.name'
          dueDate="card.dueData"
          labels="card.labels"/>
      </ul>
    </div>
    <div class="counter">Cards: {{counter}}</div>
  </div>
</section>

</template>
<script src='./Column.ts' lang='ts'/>
<style src='./Column.css' lang='css'/>
