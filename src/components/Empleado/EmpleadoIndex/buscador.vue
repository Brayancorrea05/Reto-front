<template>
  <div class="">
    <div class="titulo centrar">Empleados</div>
    <div class="linea"></div>
    <div class="contendor-buscar">
      <div class="contenedor-icon">
        <input class="inp-buscar" type="text" placeholder="Search" />
        <i class="icon-buscar"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "buscadorEmpleado",
};
</script>

<style scoped>

.contendor-buscar {
  display: flex;
  justify-content: center;
  padding: 10px;
}
.inp-buscar {
  width: 470px;
  height: 40px;
  border: 1px solid rgb(83, 81, 81);
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  border-radius: 20px;
  padding: 0.25em 0.6em;
  padding-left: 20px;
  padding-right: 35px;
}

.icon-buscar {
  font-size: 20px;
  right: 35px;
  position: relative;
}
.titulo {
  font: normal bold 52px/43px sans-serif;
  font-style: oblique;
  padding: 20px;
}
.linea{
  background: #f7bac9
}
</style>