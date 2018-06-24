 <template>
  <div class="index">
    <router-link :to="{name:'login'}">登录</router-link>
    <router-link :to="{name:'reg'}">注册</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '这是首页'
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
