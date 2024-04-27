import "./assets/main.css";
import 'ant-design-vue/dist/reset.css';

import { createApp } from "vue";
import { createPinia } from "pinia";
import { DatePicker } from 'ant-design-vue';

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(DatePicker);
app.use(router);

app.mount("#app");
