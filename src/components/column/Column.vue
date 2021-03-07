<template>
  <div>
    <h4>{{ columnName }} - {{ progress }}%</h4>
    <div class="list" >
      <div class="progress-bar">
        <div :style="{width:progress + '%'}"></div>
      </div>
      <card v-for="card in cards" :key="card.id"
        :taskName="card.name"
        :dueDate="card.due ? card.due.slice(0,10) : 'No due date' "
      />
      <p class="pr-3 text-right">Cards: {{ counter }}</p>
    </div>
  </div>
</template>
<script src='./Column.ts' lang='ts'/>
<style src='./Column.css' lang='css'/>
