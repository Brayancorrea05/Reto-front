<template>
  <div>
    <navbar />
    <show />
  </div>
</template>


<script>
import show from '@/components/Empleado/EmpleadoShow/show.vue'
export default {
  name: "EmpleadosCreate",
  components:{
    show
  }
};
</script>

<style scoped>
</style>