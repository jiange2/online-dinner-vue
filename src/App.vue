<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import "assets/css/nomalize.css";

  $body-bg-color: #F5F5F5;

  body{
    background-color: $body-bg-color;
  }
</style>
