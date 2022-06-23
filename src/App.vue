<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
/*tooltip*/
.tooltip-container {
  position: relative;
  cursor: pointer;
}
.tooltip-one {
  padding: 10px 10px;
  background: #fff;
  position: absolute;
  max-width: 180px;
  border-radius: 60px;
  text-align: center;
  filter: drop-shadow(0 3px 5px #ccc);
  line-height: 1.5;
  z-index: 4;
}
/*ocultar el tooltip*/
.tooltip-container .tooltip-one {
  display: none;
}
.tooltip-trigger:hover + .tooltip-one {
  display: block;
}
/*ajuste en pantalla*/
.centrar {
  display: flex;
  justify-content: center;
  align-items: center;
}
.separar {
  display: flex;
  justify-content: space-between;
}
.end {
  display: flex;
  justify-content: flex-end;
  padding-right: 12px;
  align-self: center;
}
.linea {
  width: auto;
  height: 1px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background: red;
  margin-bottom: 10px;
  margin-right: 10px;
  margin-left: 10px;
}
.btn-principal {
  top: 536px;
  left: 164px;
  width: 230px;
  height: 40px;
  background: red 0% 0% no-repeat padding-box;
  border-radius: 20px;
  opacity: 1;
  border: #a10c34 2px;
  border-style: none;
}
.btn-principal:hover {
  box-shadow: 0px 5px 0px 0px #ff1e5b66;
}
.text-btn {
  text-align: center;
  font: normal bold 16px/19px sans-serif;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}
.inps {
  top: 172px;
  left: 712px;
  width: 351px;
  height: 40px;
  border: #dfe4e8 0.5px solid;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  border-radius: 8px;
  padding-left: 18px;
  padding-right: 18px;
}
.div-inputs {
  display: inline-grid;
  text-align: left;
}
/*label*/
.lbl {
  text-align: left;
  font: normal 13px/15px sans-serif;
  letter-spacing: 0px;
  color: #637381;
  margin-bottom: 0;
}
.lbl-validation{
    text-align: left;
    font: normal  13px/15px sans-serif;
    letter-spacing: 0px;
    color: #df0909;
    margin-bottom: 0;
    margin-left: 10px;
}
.titulo{
    text-align: left;
    font: normal bold 35px/43px sans-serif;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
}
/*modal */
.contendor-modal {
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 6px #88888861;
  border-radius: 8px;
  width: 400px;
  z-index: 3;
}
.modal-encabezado {
  display: flex;
  margin: 20px;
  justify-content: space-between;
}
.modal-cuerpo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
}
.modal-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
}
.btn-uno {
  width: 90px;
  height: 40px;
  border-radius: 12px;
  background: #f0f1ff 0% 0% no-repeat padding-box;
  margin: 7px;
  border: none;
  color: red;
}
.btn-dos {
  width: 90px;
  height: 40px;
  border-radius: 12px;
  background: red 0% 0% no-repeat padding-box;
  margin: 7px;
  border: none;
  color: white;
}
.btn-dos:hover {
  box-shadow: 0px 3px 6px #00000029;
}
.div-ediccion {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.btn-ediccion {
  border: none;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  background-color: #ffd4df;
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 7px;
}
.btn-ediccion:hover {
  background-color: red;
  box-shadow: 1px 5px 5px rgb(92, 90, 90);
}
.icon-lapiz {
  font-size: 26px;
}
.icon-lapiz:hover {
  color: white;
}
.icon-basura {
  font-size: 26px;
}
.icon-basura:hover {
  color: white;
}
.btn-guardar {
  border: none;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  background-color: #29d884;
  align-items: center;
  justify-content: center;
  margin: 7px;
  display: flex;
}

.icon-check {
  font-size: 26px;
}
.icon-check:hover {
  color: white;
}

</style>
