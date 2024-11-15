// src/router/index.js
import { createRouter, createWebHashHistory } from "vue-router";

// Importar as views (páginas) que você tem
import SantanderView from "../views/SantanderView.vue";
import C6BankView from "../views/C6BankView.vue";
import LeccaView from "../views/LeccaView.vue";
import CapitalView from "../views/CapitalView.vue";
import BradescoView from "../views/BradescoView.vue";
import BancoPanView from "../views/BancoPanView.vue";
import MainView from "../views/MainView.vue"; // Página inicial

// Definindo as rotas
const routes = [
  {
    path: "/",
    name: "Home",
    component: MainView,
  },
  {
    path: "/santander",
    name: "Santander",
    component: SantanderView, // Esta é a view para o Santander
  },
  {
    path: "/c6bank",
    name: "C6 Bank",
    component: C6BankView, // Esta é a view para o C6 Bank
  },
  {
    path: "/lecca",
    name: "Lecca",
    component: LeccaView, // Esta é a view para o Lecca
  },
  {
    path: "/capital",
    name: "Capital",
    component: CapitalView, // Esta é a view para o Capital
  },
  {
    path: "/bradesco",
    name: "Bradesco",
    component: BradescoView, // Esta é a view para o Bradesco
  },
  {
    path: "/bancopan",
    name: "Banco PAN",
    component: BancoPanView, // Esta é a view para o Banco PAN
  },
];

// Criar o roteador com o Web Hash History
const router = createRouter({
  history: createWebHashHistory(), // Usando createWebHashHistory para o histórico com hash
  routes,
});

export default router;
