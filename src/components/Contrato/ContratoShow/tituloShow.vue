<template>
  <div>
    <div class="contenedor-head-create">
      <div class="titulo">Termino indefinido</div>
      <div class="div-ediccion">
        <div class="tooltip-container">
          <div class="tooltip-trigger">
            <button
              class="btn-ediccion"
              type="button"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              <i class="icon-lapiz"></i>
            </button>
          </div>
          <div class="tooltip-one">Editar</div>
        </div>
        <div class="tooltip-container">
          <div class="tooltip-trigger">
            <button class="btn-ediccion" type="button" data-toggle="modal"
                  data-target="#eliminarModal">
              <i class="icon-basura"></i>
            </button>
          </div>
          <div class="tooltip-one">Eliminar</div>
        </div>
      </div>
    </div>
    <div class="linea"></div>
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
                <h5 class="modal-title" id="exampleModalLabel">
                  Editar Contrato
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
                        <label class="lbl">Sueldo</label>
                        <input
                          type="text"
                          class="inps"
                          placeholder="Sueldo"
                          v-model="sueldo"
                          name="sueldo"
                        />
                        <label class="lbl-validation">{{ errors[0] }}</label>
                      </div>
                    </validation-provider>
                  </div>
                </div>
              </div>
              <div class="linea"></div>
              <div class="modal-footer">
                <div class="modal-btn">
                  <button class="btn-dos" type="">Editar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </validation-observer>
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
            <h5 class="modal-title" id="exampleModalLabel">Eliminar contrato</h5>
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
export default {
  name: "tituloContrato",
};
</script>

<style scoped>
.contenedor-head-create {
  display: flex;
  justify-content: space-around;
  padding: 10px;
}
.titulo {
  text-align: left;
  font: normal bold 35px/43px sans-serif;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
}

.linea {
  margin-bottom: 0px;
  background-color:  #f7bac9;
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
  background-color:  #f7bac9;
}
.modal-content {
  border-radius: 30px;
}

</style>