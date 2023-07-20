import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { createI18n } from "vue-i18n";
const app = createApp(App);
app.use(VueAxios, axios);
app.provide("axios", app.config.globalProperties.axios);
const messages = {
  en: {
    message: {
      hello: "Hello {name}",
      hamster: "I like hamsters",
    },
  },
  uk: {
    message: {
      hello: "Привіт {name}",
      hamster: "Мені подобаються хом'ячки",
    },
  },
};
const i18n = createI18n({ legacy: false, messages });
i18n.global.locale.value = "uk";
console.log(i18n.global.locale);
app.use(i18n);
app.mount("#app");
