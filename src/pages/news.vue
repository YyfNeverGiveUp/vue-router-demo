<template>
  <div class="news">
    <h2>新闻页</h2>
    <ul>
      <li v-for="(item,index) in list">
        <router-link :to="{path:item.path}">{{item.name}}
        </router-link>
        </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list:[
            {name:'新闻一',path:'/news/new1'},
            {name:'新闻二',path:'/news/new2'},
            {name:'新闻三',path:'/news/new3'}
      ],
      data:'new1'
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
