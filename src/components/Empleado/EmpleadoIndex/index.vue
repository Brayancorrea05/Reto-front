<template>
  <div class="contenedor-index">
    <buscador />
    <opciones />
    <div class="contenedor-cards">
      <div class="row">
        <card-empleado
         v-for="(empleado, index) in empleados"
          :key="index"
          :id="empleado.id"
          :Nombre="empleado.Nombre"
          :Area="empleado.Area_id"
          @list="ListarEmpleado" />
      </div>
    </div>
  </div>
</template>


<script>
import buscador from "@/components/Empleado/EmpleadoIndex/buscador.vue";
import cardEmpleado from "@/components/Empleado/EmpleadoIndex/cardEmpleado.vue";
import opciones from "@/components/Empleado/EmpleadoIndex/opciones.vue";
import axios from "axios";
const ENDPOINT_PATH = "http://127.0.0.1:8000/api/Empleado/";
export default {
  name: "indexEmpleado",
  data() {
    return {
        empleados:[]
    };
  },
  created: function () {
    this.ListarEmpleado();
  },
  components: {
    cardEmpleado,
    opciones,
    buscador,
  },
  methods: {
    async ListarEmpleado() {
      const { data } = await axios.get(ENDPOINT_PATH);
      this.empleados = data;
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
}
</style>