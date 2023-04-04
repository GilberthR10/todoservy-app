import { createRouter, createWebHistory } from "vue-router";
import HomeLayout from "../layout/HomeLayout.vue";
import ServiciosPage from "../views/ServiciosPage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeLayout,
      redirect: "/servicios",
      children: [
        {
          path: "/servicios",
          name: "servicios",
          component: ServiciosPage,
        },
        {
          path: "/negocios",
          name: "negocios",
          component: () => import("../views/NegociosPage.vue"),
        },
        {
          path: "/profesionales",
          name: "profesionales",
          component: () => import("../views/ProfesionalesPage.vue"),
        }
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

export default router;
