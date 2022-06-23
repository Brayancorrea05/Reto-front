<template>
  <div>
    <navbar />
    <create />
  </div>
</template>


<script>
import create from '@/components/Empleado/EmpleadoCreate/create.vue'
export default {
  name: "EmpleadosCreate",
  components:{
    create
  }
};
</script>

<style scoped>
</style>