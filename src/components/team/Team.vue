<template>
  <div class="team">
    <h6 class="title">Show team</h6>
    <ul class="members">
      <li v-bind:key="member.id" v-for="member in members">
        <div class="member">
          <div class="avatar"></div>
          <div>{{ member.fullName }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" src='./Team.ts'/>
<style lang="css" src='./Team.css'/>
