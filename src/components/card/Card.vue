<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <p style="background-color: aqua; width: 50px; height: 20px;"></p>
      <h5 class="card-title">Task: {{ taskName }}</h5>
      <p class="card-text">
        {{ description }}
      </p>
      <p>Due date: {{ dueDate }}</p>
    </div>
  </div>
</template>
<style src="./Card.css" lang="css"/>
<script src="./Card.ts" lang="ts"/>
