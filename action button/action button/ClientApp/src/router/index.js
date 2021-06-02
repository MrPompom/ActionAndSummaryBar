import { createWebHistory, createRouter } from "vue-router";
import actionbutton from "@/components/actionbutton.vue";
import summary from "@/components/summary.vue";
import FetchData from "@/components/FetchData.vue";


const routes = [
    {
        path: "/",
        name: "actionbutton",
        component: actionbutton,
    },
    {
        path: "/summary",
        name: "summary",
        component: summary,
    },
    {
        path: "/FetchData",
        name: "FetchData",
        component: FetchData,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;