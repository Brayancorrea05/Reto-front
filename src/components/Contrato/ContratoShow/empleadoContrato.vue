<template>
  <div>
    <div class="contenedor-header centrar">
      <div class="titulo-dos">Empleados</div>
      <div>
        <button class="btn-principal text-btn" type="button">Reporte</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "empleadosContrado",
};
</script>

<style scoped>
.contendor-empleados {
  height: 50px;
  padding: 10px;
}
.contenedor-header {
  display: flex;
  justify-content: space-around;
  padding: 30px;
}

.titulo-dos {
  font: normal bold 26px/43px sans-serif;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
}
.lbl-empleado {
  padding: 10px;
}
.lbl-empleado:hover {
  background-color: #ffae9d;
  border-radius: 20px;
}
</style>