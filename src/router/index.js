import {
  createRouter,
  createWebHistory,
  
} from "vue-router";



const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/index.vue"),
  },
  {
    path: "/contacts",
    name: "contacts",
    component: () => import("@/pages/contacts.vue"),
  },
  {
    path: "/rules",
    name: "rules",
    component: () => import("@/pages/rules.vue"),
  },
  {
    path: "/blog/:id",
    name: "blogArticle",
    component: () => import("@/pages/blog/[id].vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
