<template>
  <div class="contenedor-index">
    <titulo @list="ListarArea" />
    <div class="contenedor-cards">
      <div class="row">
        <componentArea
          v-for="(area, index) in areas"
          :key="index"
          :id="area.id"
          :Nombre="area.Nombre"
          @list="ListarArea"
        />
      </div>
    </div>
  </div>
</template>


<script>
import titulo from "@/components/Area/titulo.vue";
import componentArea from "@/components/Area/area.vue";
import axios from "axios";
const ENDPOINT_PATH = "http://127.0.0.1:8000/api/Area/";
export default {
  name: "indexArea",
  components: {
    titulo,
    componentArea,
  },
  data() {
    return {
      areas: [],
    };
  },

  created: function () {
    this.ListarArea();
  },
  methods: {
    async ListarArea() {
      const { data } = await axios.get(ENDPOINT_PATH);
      this.areas = data;
    },
  },
};
</script>

<style scoped>
.contenedor-index {
  padding-top: 110px;
  padding-left: 10px;
}
.contenedor-cards {
  display: flex;
  padding: 20px;
  justify-content: center;
}
</style>