<template>
  <div class="container py-5">
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
    <div class="row">
      <div v-for="list in lists" class="col-lg-4 col-md-4 col-sm-12 col-12">
        <column
          :key="list.id"
          :columnName="list.name"
          :cards="list.cards"
          :counter="list.cards.length"
          :totalTasks="totalTasks"
          :progress="((list.cards.length) * 100) / totalTasks"
          />
      </div>
    </div>
  </div>
</template>
<script src="./Home.ts" lang="ts"/>
<style src="./Home.css" lang="css"/>
