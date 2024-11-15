<template>
  <footer id="app-footer">
    <ul class="list">
      <template v-for="option in options" :key="option.name">
        <button
          v-if="!option.blocked"
          class="list-item"
          @click="handleOptionClick(option)"
          :class="{
            'new-session-item': !currentSelected,
            'selected-item': option.selected,
            'blocked-item': option.blocked,
          }"
        >
          {{ option.name }}
        </button>
      </template>
    </ul>
  </footer>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      options: [
        {
          name: "Santander",
          path: "/santander",
          selected: false,
          blocked: true,
        },
        {
          name: "C6 Bank",
          path: "/c6bank",
          selected: false,
          blocked: true,
        },

        {
          name: "Lecca",
          path: "/lecca",
          selected: false,
          blocked: false,
        },

        {
          name: "Capital",
          path: "/capital",
          selected: false,
          blocked: false,
        },

        {
          name: "Bradesco",
          path: "/bradesco",
          selected: false,
          blocked: true,
        },

        {
          name: "Banco PAN",
          path: "/bancopan",
          selected: false,
          blocked: true,
        },
      ],
      showOptions: false,
    };
  },
  created() {},
  mounted() {},
  computed: {
    currentSelected() {
      return this.options.find((element) => element.selected);
    },
  },
  watch: {},
  methods: {
    handleOptionClick(option) {
      // Caso o botão não esteja funcional, impedir execução
      if (option.blocked) {
        return null;
      }

      // Resetar todos os botões e selecionar o clicado
      this.options.forEach((element) => {
        element.selected = false;
      });
      option.selected = true;

      // Navegação com route
      this.$emit("route", option);
    },
  },
};
</script>

<style scoped>
#app-footer {
  display: flex;
  justify-content: center;
  height: 40px;
  margin-block: 10px;

  .list {
    display: flex;
    justify-content: center;
    gap: 2px;
  }

  .list:hover {
    .list-item {
      width: 100px;
      font-size: 1em;
    }
  }

  .list-item {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 40px;
    cursor: pointer;
    background-color: #700d28;
    border: none;

    transition: all 0.25s ease-out, background-color 0s;
    overflow: hidden;
    font-size: 0px;
    width: 0px;
  }
  .list-item:hover {
    background-color: #a8143c;
  }

  .new-session-item {
    width: 100px;
    font-size: 1em;
  }

  .selected-item,
  .selected-item:hover {
    background-color: #266c7e;
    width: 100px;
    font-size: 1em;
  }

  .blocked-item,
  .blocked-item:hover {
    background-color: rgb(70, 70, 70);
  }
}
</style>
