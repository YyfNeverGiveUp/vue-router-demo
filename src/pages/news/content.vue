<template>
  <div class="content">
      <span>{{yemian[0].title}}</span><span>{{yemian[0].content}}</span>
      <div>这是动态路由(content组件复用)</div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      newlist:[
               {title:'new1',content:'新闻一的内容'},
               {title:'new2',content:'新闻er的内容'},
               {title:'new3',content:'新闻san的内容'},
            ],
            yemian:''
      }
  },
  beforeRouteUpdate(to,from,next){
    this.getData(to.params.id);
    this.showInfo(to.params.id);
    next();
},
created(){
    this.getData(this.$route.params.id);
    this.showInfo(this.$route.params.id);
},
 methods: {
    getData(id){
        console.log(id);
      },
    showInfo(id){
      this.yemian=this.newlist.filter(function(item){
        return item.title==id
      })
    }
  },
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
