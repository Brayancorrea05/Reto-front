<template>
  <div class="contenedor-index">
    <titulo @list="ListarContratos"/>
    <div class="contenedor-cards">
      <div class="row">
        <cardContrato
          v-for="(contrato, index) in contratos"
          :key="index"
          :id="contrato.id"
          :Nombre="contrato.Nombre"
          :Sueldo="contrato.Sueldo"
          :EmpleadosCount="contrato.empleados_count"
          @list="ListarContratos"
        />
      </div>
    </div>
  </div>
</template>


<script>
import titulo from "@/components/Contrato/ContratoIndex/titulo.vue";
import cardContrato from "@/components/Contrato/ContratoIndex/cardContrato.vue";
import axios from "axios";
const ENDPOINT_PATH = "http://127.0.0.1:8000/api/Contrato/";
export default {
  name: "indexContrato",
  components: {
    titulo,
    cardContrato,
  },
  data() {
    return {
      contratos: [],
    };
  },
  created: function () {
    this.ListarContratos();
  },
  methods: {
    async ListarContratos() {
      const { data } = await axios.get(ENDPOINT_PATH);
      this.contratos = data;
    },
  },
};
</script>

<style scoped>
.contenedor-index {
  padding-top: 110px;
  padding-left: 10px;
}
.contenedor-cards {
  display: flex;
  padding: 20px;
  justify-content: center;
}
</style>