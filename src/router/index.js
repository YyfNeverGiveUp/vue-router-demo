import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import news from '@/pages/news'
import friend from '@/pages/friend'
import login from '@/pages/index/login'
import reg from '@/pages/index/reg'
import content from '@/pages/news/content'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/'
    },
    {
	  path: '/index',
      name:'index',
      component:index,
      children:[
      	{
	      path: '/index/login',
	      name:'login',
	      component:login
    	},
      	{
	      path: '/index/reg',
	      name:'reg',
	      component:reg
    	}    	
      ]
    },
    {
      path: '/news',
      name:'news',
      component:news,
      children:[
      	{
	      path: '/news/:id',
        name:content,
	      component:content
	  	}
      ]
    },
    {
      path: '/friend',
      name:'friend',
      component:friend
    }
  ]
})
