import { createWebHistory, createRouter } from "vue-router";
import actionbutton from "@/components/actionbutton.vue";
import summary from "@/components/summary.vue";


const routes = [
    {
        path: "/",
        name: "actionbutton",
        component: actionbutton,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;