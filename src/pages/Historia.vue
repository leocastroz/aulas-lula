<template>
  <div class="box">
    <div class="text">
      <h1>Minha História</h1>
      <p>Me chamo <span>Leonardo Silva Castro</span>, 
        tenho 21 anos, sou apaixonado por programação e
        desenvolvimento web voltado ao Front-end. Atualmente
        faço dois cursos de ensino superior, <span>Engenharia De Software 
        (2º Semestre)</span> o outro <span>Engenharia Mecânica (4º Semestre)</span>. Iniciei
        engenhaia mecânica pelo fato que a minha primeira formação profissional 
        foi em um curso federal em Têcnico Em Mecânica, pelo IFPA em minha cidade.
        Já engenharia de software, iniciei pelo fato também de fazer um curso pelo IFPA,
        além de me identificar com o ramo tecnológico. </p>
    </div>
    <div class="img">
      <img src="https://i.pinimg.com/originals/e9/37/e6/e937e654258d87dfa3bd7c3490465c36.png" alt="">
    </div>
  </div>
  

</template>

<script>
export default {
    name: 'AppHistoria',
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&display=swap');


    .box{
      padding-top: 100px;
      display: flex;
      margin: 0 auto;
      width: 1000px;
      justify-content: space-between;
      align-items: center;
    }

    .box h1{
      background: -webkit-linear-gradient(#00FF85, #FCFF7E);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-family: 'Mochiy Pop P One', sans-serif;
    }

    .box .text span{
      background: -webkit-linear-gradient(#00FF85, #FCFF7E);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: bold;
    }
    

    .box p{
      width: 600px;
      text-align: justify;
      padding-top: 20px;
      font-family: 'Poppins', sans-serif;
      color: #fff;
      font-weight: 200;
    }

    .img img{
      border-radius: 50%;
      box-shadow: 0px 0px 100px #39f79b;
    }
</style>