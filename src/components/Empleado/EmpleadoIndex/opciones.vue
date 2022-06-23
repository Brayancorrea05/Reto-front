<template>
  <div class="contenedor-opciones">
    <div style="display: flex">
      <div class="tooltip-container">
        <div class="tooltip-trigger">
          <button class="icono centrar" @click="GoToCreate">
            <i class="icon-user-agregar"></i>
          </button>
        </div>
        <div class="tooltip-one" style="top:50px">Agregar</div>
      </div>
      <div class="tooltip-container">
        <div class="tooltip-trigger">
          <button class="icono centrar">
            <i class="icon-pdf"></i>
          </button>
        </div>
        <div class="tooltip-one" style="top:50px">Reporte</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "opcionesEmpleado",

  methods:{
    GoToCreate(){
      this.$router.push({name:'Create_empleado'})
    }
  }
};
</script>


<style scoped>
.contenedor-opciones {
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
}
.icono {
  width: 45px;
  height: 45px;
  background: none;
  border: none;
  margin: 8px;
}
.icon-user-agregar {
  font-size: 25px;
  color: black;
}
.icon-user-agregar:hover{
    background-color: crimson;
    color: white;
    border-radius: 100%;
}
.icon-pdf {
  font-size: 25px;
  color: red;
}
.icon-pdf:hover{
    background-color: crimson;
    color: white;
    border-radius: 100%;
}
</style>