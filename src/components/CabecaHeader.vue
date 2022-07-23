<template>
  <header>
    <div class="logo">
      <a class="logo-logo" href="/">leo_X</a>
    </div>
    <div class="links">
      <a class="linkes" href="historia">História</a>
      <a class="linkes" href="carreira">Carreira Dev </a>
      <a class="linkes" href="repositorio">Repositório-Git</a>
      <a class="linkes" href="notas">Notas</a>
      <a class="linkes" href="comunidade">Comunidade</a>
      <a class="linkes" href="cv">CV</a>
      <a class="entrar" href="entrar"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M20 11V12.17C20.5852 12.3769 21.0917 12.7602 21.4499 13.267C21.8081 13.7739 22.0003 14.3793 22 15V21C22 21.7956 21.6839 22.5587 21.1213 23.1213C20.5587 23.6839 19.7956 24 19 24H11C10.2044 24 9.44129 23.6839 8.87868 23.1213C8.31607 22.5587 8 21.7956 8 21V15C7.99968 14.3793 8.19186 13.7739 8.55006 13.267C8.90826 12.7602 9.41484 12.3769 10 12.17V11C10 9.67392 10.5268 8.40215 11.4645 7.46447C12.4021 6.52678 13.6739 6 15 6C16.3261 6 17.5979 6.52678 18.5355 7.46447C19.4732 8.40215 20 9.67392 20 11V11ZM12 11C12 10.2044 12.3161 9.44129 12.8787 8.87868C13.4413 8.31607 14.2044 8 15 8C15.7956 8 16.5587 8.31607 17.1213 8.87868C17.6839 9.44129 18 10.2044 18 11V12H12V11Z" fill="black"/>
      </svg> Entrar</a>
    </div>

  </header>
  <div class="sub">
    <p>Developement by - Leonardo Castro no-copright © 2022 . BR</p>
  </div>


 

</template>

<script>
export default {
  name: 'CabecaHeader',
}

</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&display=swap');

body{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

header{
 
  width: 100%;
  height: 80px;
  display: flex;
  font-family: 'Poppins', sans-serif;
  background: rgb(0,0,0);
  background: linear-gradient(90deg, rgba(0,0,0,1) 40%, rgb(27, 27, 27) 100%);
  justify-content: space-between ;
  align-items: center;

}

header .logo .logo-logo{
  background: -webkit-linear-gradient(#00FF85, #FCFF7E);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  font-size: 23px;
  font-family: 'Mochiy Pop P One', sans-serif;
  
} 


header .links {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
}


header .links .entrar{
  justify-content: center;
  align-items: center;
  display: flex;
  width: 80px;
  color: #000;
  padding: 5px 10px;
  border-radius: 3px;
  background: -webkit-linear-gradient(#00FF85, #FCFF7E);
  
  
}




header a{
  padding: 0 20px;
  text-decoration: none;
  color: #fff;
  font-size: 13.5px;
}

header .linkes:hover{
  background: -webkit-linear-gradient(#00FF85, #FCFF7E);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

}



.sub{
 
  color: #000;
  font-weight: 600;
  width: 100%;
  height: 20px;
    font-family: 'Poppins', sans-serif;
    font-size: 10px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background: -webkit-linear-gradient(#00FF85, #FCFF7E);
}

/* MEDIAS DE TAMANHO */

@media (max-width: 1000px){
  header .links{
    display: none;
  }
}

</style>
