<template>
  <div>
    <Transition name="application" mode="out-in">
      <div class="firstState" v-if="!hasSelectedSheet" key="firstState">
        <button @click="handleSelectSheet">
          {{ selectedSheet.name ? selectedSheet.name : "Selecionar planilha" }}
        </button>
      </div>

      <div class="secondState" v-if="hasSelectedSheet" key="secondState">
        <div class="static">
          <h1>Nome do arquivo.xlsx</h1>
          <button>Alterar planilha</button>
          <button>Iniciar consulta</button>
          <button>Pausar consulta</button>
        </div>
        <div class="process">
          <div class="table">
            <TransitionGroup name="list">
              <section class="row-header">
                <span class="name">Nome</span>
                <span class="credit">Crédito</span>
                <span class="benefit">Benefício</span>
                <span class="status">Status</span>
              </section>
              <section
                class="row-body"
                v-for="client in workbook"
                :key="client.name"
              >
                <span class="name">{{ client.name }}</span>
                <span class="credit">{{ client.credit }}</span>
                <span class="benefit">{{ client.benefit }}</span>
                <span class="status">{{ client.status }}</span>
              </section>
            </TransitionGroup>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedSheet: { name: null, path: null },
      workbook: [
        {
          name: "Cliente 1",
          credit: "98",
          benefit: "N/A",
          status: "Atualizado",
        },
      ],
    };
  },
  computed: {
    hasSelectedSheet() {
      return this.selectedSheet.name != null;
    },
  },
  methods: {
    handleSelectSheet() {
      if (!this.hasSelectedSheet) {
        this.selectedSheet.name = "Planilha";
      }
    },
    addFakeClient() {
      // Dados fictícios de um novo cliente
      const newClient = {
        name: `Cliente ${this.workbook.length + 1}`,
        credit: `${Math.floor(Math.random() * 500)}`,
        benefit: `${Math.floor(Math.random() * 20) + 1}%`,
        status: ["Ativo", "Inativo", "Pendente"][Math.floor(Math.random() * 3)],
      };
      this.workbook.push(newClient);
    },
  },
  mounted() {
    // Adiciona um novo cliente a cada 2 segundos
    setInterval(this.addFakeClient, 1000);
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(211, 69, 13, 0.9);
  border-radius: 10px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}

#content {
  display: flex;

  .firstState,
  .secondState {
    flex: 1;
    height: 100%;
  }

  button {
    background-color: rgba(211, 69, 13, 0.9);
    min-height: 45px;
    min-width: 120px;
    width: 200px;
    padding: 0.5em 1em;
    font-size: 1em;
    cursor: pointer;
  }
  button:hover {
    background-color: rgba(211, 69, 13, 1);
  }

  .firstState {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .secondState {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .static {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 5px;
    margin-right: 2.5px;

    h1 {
      font-size: 1.5em;
      margin-block: 10px;
    }
  }

  .process {
    margin-block: auto;
    max-height: 440px;
    margin-left: 2.5px;
    overflow-y: auto;
  }

  .table {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;

    .row-header,
    .row-body {
      display: grid;
      grid-template-columns: 30% 20% 20% 30%;
      height: 40px;
    }

    .row-header {
      font-weight: bold;
    }

    span {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .row-body:hover {
      background-color: rgba(211, 69, 13, 0.9);
    }
  }
}

.application-enter-active {
  transition: opacity 0.4s ease-in;
}

.application-leave-active {
  transition: opacity 0.1s ease-out;
}

.application-enter-from,
.application-leave-to {
  opacity: 0;
}

.list-move,
.list-enter-active {
  transition: all 0.2s ease-in;
}
.list-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
</style>
