<template>
  <div>
    <navbar />
    <index
    
    />

  </div>
</template>


<script>
import index from '@/components/Area/index.vue'

export default {
  name: "AreaIndex",
  components: {
    index
  },
  data(){
    return{
      areas:[]
    }
  },
  
};
</script>


<style scoped>
</style>