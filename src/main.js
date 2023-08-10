import { createApp } from "vue";
import { createPinia } from "pinia";
import axios from "axios";
import VueAxios from "vue-axios";
import router from "./router";
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

// Components
import App from "./App.vue";

// Styles
import "@/assets/styles/index.scss";
import "element-plus/dist/index.css";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

// Add global icons
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(pinia);
app.use(router);
app.use(VueAxios, axios);
app.use(ElementPlus);
app.provide("axios", app.config.globalProperties.axios); // provide 'axios';
app.mount("#app");
