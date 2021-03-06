<template>
<section>
  <h2>{{columnName}}</h2>
  <div class="card">
    <div class="progress-bar">
      <div :style="{width:progress + '%'}"></div>
    </div>
    <div class="content">
      <ul>
        <div v-for="item in items" :key="item.id">
          {{ item.mensaje }}
        </div>
      </ul>
    </div>
    <div class="counter">Cards: {{counter}}</div>
  </div>
</section>

</template>
<script src='./Column.ts' lang='ts'/>
<style src='./Column.css' lang='css'/>
