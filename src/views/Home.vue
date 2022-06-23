<template>
  <div>
    <navbar/>
    <empleados-index/>
  </div>
</template>

<script>
import EmpleadosIndex from '@/views/Empleados/index.vue'

export default {
  name: "Home",
  components: {
    EmpleadosIndex
    
  },
};
</script>

<style scoped>
</style>