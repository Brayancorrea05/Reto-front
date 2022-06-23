<template>
  <div class="contenedor-formulario">
    <div class="">
      <validation-observer v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit()">
          <div class="linea"></div>
          <div style="display: flex; align-items: center">
            <div class="campos">
              <div class="campos-derecha">
                <div style="height: 105px">
                  <validation-provider
                    rules="required|alpha"
                    v-slot="{ errors }"
                    style=""
                  >
                    <div class="div-inputs">
                      <label class="lbl">Nombre de area</label>
                      <input
                        type="text"
                        class="inps"
                        id="iptArea"
                        placeholder="Nombre"
                        v-model="Nombre"
                        name="Nombre"
                      />
                      <div>
                        <label class="lbl-validation">{{ errors[0] }}</label>
                      </div>
                    </div>
                  </validation-provider>
                </div>
              </div>
            </div>
            <div class="div-ediccion">
              <div class="tooltip-container">
                <div class="tooltip-trigger">
                  <button class="btn-ediccion">
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
                    :data-target="'#eliminarModal' + id"
                  >
                    <i class="icon-basura"></i>
                  </button>
                </div>
                <div class="tooltip-one">Eliminar</div>
              </div>
            </div>
          </div>

          <div class="linea"></div>
        </form>
      </validation-observer>
    </div>

    <!-- Modal -->

    <div
      class="modal fade"
      :id="'eliminarModal' + id"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      v-if="eliminarArea"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Eliminar area</h5>
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
              <button class="btn-dos" type="" @click="DeleteArea">
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const ENDPOINT_PATH = "http://127.0.0.1:8000/api/Area/";
export default {
  name: "componentArea",
  data() {
    return {
      eliminarArea: true,
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
    area: {
      type: Object,
      default() {
        // default function receives the raw props object as argument
        return {
          id: 0,
          Nombre: "",
          created_by: null,
          updated_by: null,
          created_at: "",
          updated_at: "",
          deleted_at: null,
          areas: [],
        };
      },
    },
  },
  methods: {
    async DeleteArea() {
      const { data } = await axios.delete(ENDPOINT_PATH + this.id);
      this.areas = data.areas;
      this.$emit("list");

      console.log(this.id);
    },
  },
};
</script>

<style scoped>
.modal-backdrop.show {
  opacity: 0 !important;
}
.contenedor-formulario {
  display: flex;
  border: 1px solid;
  border-radius: 20px;
  padding: 20px;
  margin-left: 20px;
  margin-bottom: 30px;
  box-shadow: 5px 10px 15px #0c0c0c29;
}
.campos {
  display: flex;
}
.campos-derecha {
  display: block;
  width: 350px;
  margin: 20px;
}

.linea {
  background: #ebb1bf;
}
.div-ediccion {
  padding-bottom: 30px;
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