<template>
  <RouterView id="content" />
  <!-- Captura o evento `route` emitido pelo FooterElement e chama `navigateToRoute` -->
  <FooterElement @route="navigateToRoute" />
</template>

<script setup>
import { ref, reactive } from "vue";
import { RouterView, useRouter } from "vue-router";

import FooterElement from "./components/FooterElement.vue";

// Usa o hook `useRouter` para acessar o roteador
const router = useRouter();

// Função para capturar o evento de rota e navegar para o caminho selecionado
function navigateToRoute(option) {
  router.push(option.path);
}
</script>

<style scoped></style>
