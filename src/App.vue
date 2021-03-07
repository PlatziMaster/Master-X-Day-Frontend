<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/graphics">Graphics</router-link>
      <div id="app">
        {{ info }}
      </div>
    </div>
    <router-view />
  </div>
</template>
