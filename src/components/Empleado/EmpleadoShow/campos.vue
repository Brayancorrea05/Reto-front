<template>
  <div class="contenedor-formulario">
    <div class="">
      <validation-observer v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit()">
          <div class="div-ediccion">
            <div class="tooltip-container">
              <div class="tooltip-trigger">
                <button class="btn-ediccion" type="submit">
                  <i class="icon-lapiz"></i>
                </button>
              </div>
              <div class="tooltip-one">Editar</div>
            </div>
            <div class="tooltip-container">
              <div class="tooltip-trigger">
                <button
                  class="btn-ediccion"
                  type="button"
                  data-toggle="modal"
                  data-target="#eliminarModal"
                >
                  <i class="icon-basura"></i>
                </button>
              </div>
              <div class="tooltip-one">Eliminar</div>
            </div>
          </div>

          <div class="campos">
            <div class="centrar">
              <div class="conteneor-img"></div>
            </div>
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
                      name="Nombre"
                    />
                    <div>
                      <label class="lbl-validation">{{ errors[0] }}</label>
                    </div>
                  </div>
                </validation-provider>
              </div>
              <div style="height: 105px">
                <validation-provider
                  rules="required|numeric"
                  v-slot="{ errors }"
                  style=""
                >
                  <div class="div-inputs">
                    <label class="lbl">Cedula</label>
                    <input
                      type="text"
                      class="inps"
                      placeholder="Cedula"
                      v-model="cedula"
                      name="cedula"
                    />
                    <label class="lbl-validation">{{ errors[0] }}</label>
                  </div>
                </validation-provider>
              </div>
              <div style="height: 105px">
                <validation-provider
                  rules="required|numeric"
                  v-slot="{ errors }"
                  style=""
                >
                  <div class="div-inputs">
                    <label class="lbl">Telefono</label>
                    <input
                      type="text"
                      class="inps"
                      placeholder="Telefono"
                      v-model="telefono"
                      name="telefono"
                    />
                    <label class="lbl-validation">{{ errors[0] }}</label>
                  </div>
                </validation-provider>
              </div>
            </div>
          </div>
          <div class="linea"></div>
          <div class="centrar">
            <div class="campos-izquierda">
              <div style="height: 105px">
                <ValidationProvider rules="excluded:0" v-slot="{ errors }">
                  <div class="div-inputs">
                    <label class="lbl">Tipo Contrato</label>
                    <select
                      type="text"
                      class="inps"
                      v-model="contrato"
                      name="contrato"
                    >
                      <option disabled selected value="0">
                        Seleccionar Contrato
                      </option>
                       <option
                    v-for="nombreContrato in contratos"
                    :key="nombreContrato.id"
                    :value="nombreContrato.id"
                  >
                    {{ nombreContrato.Nombre }}
                  </option>
                    </select>
                    <span class="lbl-validation">{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>
              </div>
              <div style="height: 105px">
                <ValidationProvider rules="excluded:0" v-slot="{ errors }">
                  <div class="div-inputs">
                    <label class="lbl">Area</label>
                    <select type="text" class="inps" v-model="area" name="area">
                      <option disabled selected value="0">
                        Seleccionar Area
                      </option>
                      <option
                        v-for="nombreaArea in areas"
                        :key="nombreaArea.id"
                        :value="nombreaArea.id"
                      >
                        {{ nombreaArea.Nombre }}
                      </option>
                    </select>
                    <span class="lbl-validation">{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>
              </div>
            </div>
          </div>
        </form>
      </validation-observer>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="eliminarModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Eliminar empleado
            </h5>
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
            <label for="">¿Está seguro que desea eliminar este elemento?</label>
          </div>
          <div class="linea"></div>
          <div class="modal-footer">
            <div class="modal-btn">
              <button class="btn-dos" type="">Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const ENDPOINT_PATH_AREA = "http://127.0.0.1:8000/api/Area/";
const ENDPOINT_PATH_CONTRATOS = "http://127.0.0.1:8000/api/Contrato/";
export default {
  name: "camposEmpleado",
  data() {
    return {
      nombre: "",
      cedula: "",
      telefono: "",
      contrato: 0,
      contratos: [],
      area: 0,
      areas: [],
    };
  },
  created: function () {
    this.ListarArea();
    this.ListarContratos();
  },
  methods: {
    async ListarArea() {
      const { data } = await axios.get(ENDPOINT_PATH_AREA);
      this.areas = data;
    },
    async ListarContratos() {
      const { data } = await axios.get(ENDPOINT_PATH_CONTRATOS);
      this.contratos = data;
    },
  },
};
</script>

<style scoped>
.contenedor-formulario {
  display: flex;
  border: 1px solid;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 5px 10px 15px #0c0c0c29;
}

.conteneor-img {
  background-color: rgb(161, 159, 159);
  height: 195px;
  width: 195px;
  border-radius: 100px;
}
.cam-btn {
  display: flex;
  justify-content: flex-end;
}
.campos {
  display: flex;
}
.campos-derecha {
  display: block;
  width: 350px;
  margin: 20px;
}
.campos-izquierda {
  display: block;
}

.linea {
  background: #ebb1bf;
}
.modal-footer {
  border-top: 0;
  padding: 1px;
}
.modal-header {
  border-bottom: 0;
}
.linea {
  margin-bottom: 0px;
  background-color: #f7bac9;
}
.modal-content {
  border-radius: 30px;
}
</style>