import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/Index'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import NotFound from './components/404'
import Dashboard from './components/Dashboard'
import CreateProfile from './components/CreateProfile'
import EditProfile from './components/EditProfile'
import AddExperience from './components/AddExperience'
import AddEducation from './components/AddEducation'
import Profiles from './components/Profiles'
import Profile from './components/profile/Profile'
import Posts from './components/posts/Posts'
import Post from './components/posts/Post'

Vue.use(Router)

 const router = new Router({
  mode:'history',
  linkActiveClass:'active',
  routes:[
    {
      path: '/',
      redirect: '/index'
    },
    {path:'/index',component:Index,children:[
    {path:'/',component:Landing},
    {path:'/login',component:Login},
    {path:'/register',component:Register},
    {path:'/dashboard',component:Dashboard},
    {path:'/create-profile',component:CreateProfile},
    {path:'/edit-profile',component:EditProfile},
    {path:'/add-experience',component:AddExperience},
    {path:'/add-education',component:AddEducation},
    {path:'/profiles',component:Profiles},
    // {path:'/profile/:handle',component:Profile},
    {path:'/profile/:id',component:Profile},
    {path:'/feed',component:Posts},
    {path:'/post/:id',component:Post}
    ]},
    {path:'*',component:NotFound}
  ]
})

// 路由守卫
router.beforeEach((to,from,next) => {
  const isLogin = localStorage.jwtToken ? true : false
  if (to.path == '/login' || to.path == '/register' || to.path == '/') {
    next()
  } else {
    isLogin ? next() : next('/login')
  }
})

export default router
