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

<style>
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  html,body,#app {height: 100%;}
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  .clearfix:after{
    display: block;
    height: 0;
    content: '';
    clear: both;
    visibility: hidden;
  }
  .clearfix{
    *+height: 1%;
  }
  p,span,div{
    font-size: 0.28rem;
  }
</style>
