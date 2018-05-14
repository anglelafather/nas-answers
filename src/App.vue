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
  body {
    background-color: #f6f6f6;
  }
  #app {
    width: 70%;
    margin: 0 auto;
    padding: 50px 0;
    color: #303133;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;  
  }
  h1,h2,h3,h4,h5,h6,p {
    font-weight: 400;
  }
  p {
    text-indent: 32px
  }
</style>
