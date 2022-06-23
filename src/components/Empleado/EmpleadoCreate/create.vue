<template>
  <div class="contenedor-create">
    <titulo />
    <div class="div-campos">
      <campos />
    </div>
  </div>
</template>

<script>
import titulo from "@/components/Empleado/EmpleadoCreate/titulo.vue";
import campos from "@/components/Empleado/EmpleadoCreate/campos.vue";
export default {
  name: "EmpleadoCreate",
  components: {
    titulo,
    campos,
  },
};
</script>

<style scoped>
.contenedor-create {
  padding-top: 110px;
  padding-left: 10px;
}
.div-campos {
  display: flex;
  justify-content: center;
  padding: 25px;
}
</style>