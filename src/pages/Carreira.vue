<template>
    <div class="box">
        <h1>Carreira como Dev </h1>
        <p>Conheça toda minha trajetória como desenvolvedor web,
            até meus dias atuais, codificando com a stack Front-end
        </p>
    </div>
</template>

<script>
export default {
    name: 'AppCarreira',
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&display=swap');

.box h1{
     background: -webkit-linear-gradient(#00FF85, #FCFF7E);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-family: 'Mochiy Pop P One', sans-serif;
      text-align: center;
      padding-top: 50px;
}

.box p{
    font-family: 'Poppins', sans-serif;
    color: #fff;
    text-align: center;
    font-weight: 200;
    width: 500px;
    margin: 0 auto;
    padding-top: 20px;
}


</style>