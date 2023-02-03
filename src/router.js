import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import AboutUs from "./pages/AboutUs.vue";
import ContactUs from "./pages/ContactUs.vue";
import SingleProject from "./pages/SingleProject.vue";
import Page404 from "./pages/Page404.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: HomePage,
    },
    {
      path: "/chi-siamo",
      name: "about-us",
      component: AboutUs,
    },
    {
      path: "/contatti",
      name: "contact-us",
      component: ContactUs,
    },
    {
      path: "/project/:slug",
      name: "single-project",
      component: SingleProject,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "page-404",
      component: Page404,
    },
  ],
});

export default router;
