<template>
    <meta charset="utf-8" />
    <summary-bar></summary-bar>
    <action-button v-on:searchinformation="onActionButtOnSearchClick($event)"></action-button>
      <pre class="language-json"><code>{{actionButtonInformation}}</code></pre>
</template>

<script>
import SummaryBar from './components/summary.vue'
import ActionButton from './components/actionbutton.vue'

export default {
  name: 'App',
  components: {
    SummaryBar,
    ActionButton,
  },
  data() {
  return {
    actionButtonInformation: [],
  } 
  },
  methods: {
    onActionButtOnSearchClick(val) {
      console.log("parents : ", val)
      this.actionButtonInformation = val;
    }
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
