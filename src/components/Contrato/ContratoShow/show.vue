<template>
  <div class="contenedor-show-contrato">
    <titulo />
    <div class="">
    <empleadosContrado/>
    <empleados/>
    </div>
  </div>
</template>

<script>
import titulo from "@/components/Contrato/ContratoShow/tituloShow.vue";
import empleadosContrado from '@/components/Contrato/ContratoShow/empleadoContrato.vue';
import empleados from '@/components/Contrato/ContratoShow/emṕleados.vue'
export default {
  name: "Contrato",
  components: {
    titulo,
    empleadosContrado,
    empleados
  },
};
</script>

<style scoped>
.contenedor-show-contrato {
  padding-top: 110px;
  padding-left: 10px;
}
.div-campos {
  display: flex;
  justify-content: center;
  padding: 25px;
}
</style>