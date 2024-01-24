import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import AppProjects from "./pages/AppProjects.vue";
import SingleProject from "./pages/SingleProject.vue";
import AppError from "./pages/AppError.vue";
import AppContact from "./pages/AppContact.vue";



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome,
        },
        {
            path: "/projects",
            name: "projects",
            component: AppProjects,
        },
        {
            path: "/projects/:id",
            name: "single-project",
            component: SingleProject,
        },
        {
            path: "/contacts",
            name: "contacts",
            component: AppContact,
        },
        {
            path: "/error",
            name: "not-found",
            component: AppError,
        }
    ]
});

export default router;