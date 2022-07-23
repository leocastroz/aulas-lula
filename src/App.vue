<template>
  <CabecaHeader />
  <router-view></router-view>

</template>

<script>
import CabecaHeader from './components/CabecaHeader.vue';


export default {
  name: 'App',
  components: {
    CabecaHeader,
  }
}
</script>

<style>


/* RESET DO APP */

*{padding: 0;margin: 0;box-sizing: border-box;}

  body{background-color: #060606;}
     

/* RESET DO APP */


/* BARRA LATERAL DE ROLAGEM */

body::-webkit-scrollbar {
  width: 4px;               /* width of the entire scrollbar */
}

body::-webkit-scrollbar-thumb {
   background: -webkit-linear-gradient(#00FF85, #FCFF7E);
}

/* BARRA LATERAL DE ROLAGEM */

</style>
