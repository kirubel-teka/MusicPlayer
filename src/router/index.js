import { createRouter, createWebHistory } from 'vue-router'
import useUserStore from "@/stores/user"

const Home = () => import("@/views/HomeView.vue");
const About = () => import("@/views/AboutView.vue");
const Manage = () => import("@/views/ManageView.vue");
const AppSong = () => import("@/views/Song.vue");

const routes = [
  {
    name: 'home',
    path: "/",
    component: Home,
  },
  {
    name: 'about',
    path: "/about",
    component: About,
  },
{
    name: 'manage',
    path: "/manage-music",
    component: Manage,
    meta: {
      requiresAuth: true,
    }
},
{
  path: '/manage',
  redirect: { name: 'manage'},
},
{
  name: 'Song',
  path: '/song/:id',
  component: AppSong,
},

{
  path: '/:catchAll(.*)*',
  redirect : { name: 'home'},
}
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-yellow-500'
});

router.beforeEach((to, from, next) =>{
  
  if(!to.meta.requiresAuth) {
    next();
    return;
  }
  
  const store = useUserStore();

  if (store.userLoggedIn) {
    next();
  } else {
    next({ name: "home" });
  }
});


export default router
