import { createApp } from "vue";
import { createPinia } from "pinia";
import axios from "axios";
import VueAxios from "vue-axios";
import router from "./router";

// Components
import App from "./App.vue";

// Styles
import "@/assets/styles/index.scss";

const pinia = createPinia();

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(VueAxios, axios);
app.provide("axios", app.config.globalProperties.axios); // provide 'axios';
app.mount("#app");
