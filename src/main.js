import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router"; // Importando o router

// Criando a aplicação Vue e usando o router
const app = createApp(App);

app.use(router);
app.mount("#app");
