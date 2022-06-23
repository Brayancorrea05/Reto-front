<template>
  <div style="padding: 10px">
    <div class="contenedor-card">
      <div class="card">
        <div class="header-card">
          <div class="img"></div>
        </div>
        <div class="linea"></div>
        <div class="footer-card">
          <div class="descripcion-card">
            <div>
              <label><strong>Nombre:</strong> </label>
              <label style="margin-left: 5px"> {{ Nombre }}</label>
            </div>
            <div>
              <label><strong>Area:</strong></label>
              <label style="margin-left: 5px">{{ Area }}</label>
            </div>
          </div>
          <div>
            <div class="tooltip-container">
              <div class="tooltip-trigger">
                <button class="icono centrar" @click="GoToShowEmpleado">
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
  name: "cardEmpleado",
  data() {
    return {
      areas: [],
    };
  },
  props: {
    id: {
      type: Number,
      default: 0,
    },
    Nombre: {
      type: String,
      default: "Sin nombre",
    },
    Area: {
      type: Number,
      default: 0,
    },
    empleado: {
      type: Object,
      default() {
        // default function receives the raw props object as argument
        return {
          id: 0,
          Nombre: "",
          Area: 0,
          created_by: null,
          updated_by: null,
          created_at: "",
          updated_at: "",
          deleted_at: null,
          Areas: [],
        };
      },
    },
  },
  methods: {
    GoToShowEmpleado() {
      this.$router.push({ name: "Show_empleado" });
    },
  },
};
</script>



<style scoped>
.contenedor-card {
  width: 315px;
}
.header-card {
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
}
.footer-card {
  display: flex;
  height: 70px;
  justify-content: space-between;
  padding-top: 10px;
  align-items: center;
}
.card {
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #c00;
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