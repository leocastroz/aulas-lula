<template>
    <section>
        <h1>BEM - VINDO</h1>
        <p>fique à vontade Recrutador, respire e relaxe. Conheça toda plataforma e meus trabalhos antes de continuar sua visita.</p>
    </section>
</template>

<script>
export default {
    name: 'AppHome',
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


*{
    font-family: 'Poppins', sans-serif;
}

body{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

section h1{
  background: -webkit-linear-gradient(#00FF85, #FCFF7E);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Mochiy Pop P One', sans-serif;
  text-align: center;
  padding-top: 200px;
  font-size: 34px;
  

}

section {
  width: 350px;
  margin: 0 auto;

}

section p{
  color: #fff;  
  font-family: 'Poppins', sans-serif;
  text-align: center;
  padding-top: 10px;
  font-weight: 100;
  font-size: 16px;
}



</style>