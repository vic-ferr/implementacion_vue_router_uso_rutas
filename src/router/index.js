import Vue from "vue";
import VueRouter from "vue-router";
import PrimerView from "../views/PrimerView.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "portada",
    component: PrimerView,
  },
  {
    path: "/SobreMiView",
    name: "sobre mi",
    component: () => import("../views/SobreMiView.vue")
  },
  {
    path: "/Contacto",
    name: "contacto",
    component: () => import("../views/ContactoView.vue")
  },
  {
    path: "/Post",
    name: "Ultimavista",
    component: () => import("../views/UltimaView.vue"),
    children: [
      {
        path: "/Post/:id",
        name: "ultima-detalle",
        component: () => import("../views/UltimaDetalleView.vue")
      },
      {
        path: "*",
        name: "no encontrada",
        component: () => import("../views/RutaNull.vue")
      }
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
