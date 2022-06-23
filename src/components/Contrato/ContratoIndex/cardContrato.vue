<template>
  <div style="padding: 10px; padding-left: 40px">
    <div class="contenedor-card-contrato">
      <div class="card-contrato">
        <div class="centrar">
          <div class="header-card">
            <div>
              <label><strong>Numero contrato:</strong> </label>
              <label style="margin-left: 5px"> {{ id }}</label>
            </div>
            <div>
              <label><strong>Tipo contrato:</strong></label>
              <label style="margin-left: 5px">{{ Nombre }}</label>
            </div>
            <div>
              <label><strong>Sueldo:</strong></label>
              <label style="margin-left: 5px">{{ Sueldo }}</label>
            </div>
          </div>
        </div>

        <div class="linea"></div>
        <div class="footer-card">
          <div class="descripcion-card">
            <div>
              <label><strong>Empleados:</strong></label>
              <label style="margin-left: 5px">{{ EmpleadosCount }}</label>
            </div>
          </div>
          <div>
            <div class="tooltip-container">
              <div class="tooltip-trigger">
                <button class="icono centrar" @click="GoToShowContrato">
                  <img
                    src="@/assets/tresPuntos.png"
                    alt=""
                    class="tres-puntos"
                  />
                </button>
              </div>
              <div class="tooltip-one" style="bottom: 35px; left: -9px">
                Detalles
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardContrato",
  props: {
    id: {
      type: Number,
      default: 0,
    },
    Nombre: {
      type: String,
      default: "Sin nombre",
    },
    Sueldo: {
      type: String,
      default: "0",
    },
    EmpleadosCount: {
      type: Number,
      default: 0,
    },
    contrato: {
      type: Object,
      default() {
        // default function receives the raw props object as argument
        return {
          "id": 0,
          "Nombre": "",
          "Sueldo":0,
          "empleados_count":0,
          "created_by": null,
          "updated_by": null,
          "created_at": "",
          "updated_at": "",
          "deleted_at": null,
          "Contratos": [],
        };
      },
    },
  },
  methods: {
    GoToShowContrato() {
      this.$router.push({ name: "Show_contrato" });
    },
  },
};
</script>



<style scoped>
.contenedor-card-contrato {
  width: 315px;
}
.header-card {
  height: 150px;
  display: grid;
  align-content: center;
}
.footer-card {
  display: flex;
  height: 70px;
  justify-content: space-between;
  padding-top: 10px;
  align-items: center;
}
.card-contrato {
  padding: 10px;
  border-radius: 20px;
  border: 1px solid rgb(0, 14, 204);
  box-shadow: 5px 10px 15px #0c0c0c29;
}
.descripcion-card {
  display: block;

  text-align: left;
}
.tres-puntos {
  width: 50px;
}
.icono {
  width: 45px;
  height: 45px;
  background: none;
  border: none;
  margin: 8px;
}
.img {
  background-color: black;
  height: 195px;
  width: 195px;
  border-radius: 100px;
}
</style>