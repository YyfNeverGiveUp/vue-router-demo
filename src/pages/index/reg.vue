<template>
  <div class="reg">
    {{msg}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '这是注册页面(这是嵌套路由)'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
