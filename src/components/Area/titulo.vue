<template>
  <div>
    <div class="con">
      <div class="titulo centrar">Area</div>

      <div style="margin-left: 100px">
        <button
          class="btn-principal text-btn"
          type="button"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Crear
        </button>
      </div>

      <validation-observer v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit()">
          <!-- Modal -->
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Crear Area</h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="campos-derecha">
                    <div style="height: 105px">
                      <validation-provider
                        rules="required|alpha"
                        v-slot="{ errors }"
                        style=""
                      >
                        <div class="div-inputs">
                          <label class="lbl">Nombre</label>
                          <input
                            type="text"
                            class="inps"
                            placeholder="Nombre"
                            v-model="nombre"
                            name="nombre"
                          />
                          <div>
                            <label class="lbl-validation">{{
                              errors[0]
                            }}</label>
                          </div>
                        </div>
                      </validation-provider>
                    </div>
                  </div>
                </div>
                <div class="linea"></div>
                <div class="modal-footer">
                  <div class="modal-btn">
                    <button class="btn-dos" type="" @click="AddArea">
                      Crear
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </validation-observer>
    </div>
    <div class="linea"></div>
  </div>
</template>

<script>
import axios from "axios";
const ENDPOINT_PATH = "http://127.0.0.1:8000/api/Area/";
export default {
  name: "TituloArea",
  data() {
    return {
      nombre: "",
      areas: [],
    };
  },
  created: function () {
    this.nombre = "";
  },
  methods: {
    async AddArea() {
      let payload = {
        NombreArea: this.nombre,
      };
      try {
        const { data } = await axios.post(ENDPOINT_PATH, payload);
        this.areas = data;
        console.log(data);
        this.$emit("list");
        this.nombre= ''
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.con {
  display: flex;
  justify-content: center;
  align-items: center;
}
.titulo {
  font: normal bold 52px/43px sans-serif;
  font-style: oblique;
  padding: 20px;
}

.linea {
  margin-bottom: 0px;
  background-color: #f7bac9;
}

.modal-content {
  border-radius: 30px;
}
.modal-footer {
  border-top: 0;
  padding: 1px;
}
.modal-header {
  border-bottom: 0;
}
</style>