<template>
  <div class="contenedor-show">
    <titulo />
    <div class="div-campos">
      <campos />
    </div>
  </div>
</template>

<script>
import titulo from "@/components/Empleado/EmpleadoShow/titulo.vue";
import campos from "@/components/Empleado/EmpleadoShow/campos.vue";
export default {
  name: "Empleado",
  components: {
    titulo,
    campos,
  },
};
</script>

<style scoped>
.contenedor-show {
  padding-top: 110px;
  padding-left: 10px;
}
.div-campos {
  display: flex;
  justify-content: center;
  padding: 25px;
}
</style>