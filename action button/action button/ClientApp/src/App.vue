<template>
    <meta charset="utf-8" />

    <router-view />
</template>

<script>

    

export default {
        name: 'App',
  components: {

  }
}
</script>

<style>
    @font-face {
        font-family: "DINpro";
        src: url(./font/DINPro-Cond.woff) format("woof");
    }
#app {
  font-family: DINpro ,Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
