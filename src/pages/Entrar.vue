<template>
    <div class="box">
        <h1> Atenção</h1>
        <p>Normalmente somente o desenvolvedor desta página tens o acesso
        de todo conteúdo publicado.
        </p>
        <p class="contact">Entre em contato Leonardo por aqui <i class="fa-solid fa-arrow-right"></i> <a href="/">Solicitação de acesso</a></p>
    </div>

    <div class="login">
        <div class="left">
            <form>
                <input type="email" placeholder="ID Pessoal">
                <input type="password" placeholder="Senha">
                <input type="submit" value="ENTRAR">
            </form>
        </div>
    </div>
  
</template>

<script>
export default {
    name: 'AppEntrar'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&display=swap');

body{
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/d/d6/WarpTrails001.gif');
}

.box h1{
     background: -webkit-linear-gradient(#00FF85, #FCFF7E);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-family: 'Mochiy Pop P One', sans-serif;
      text-align: center;
      padding-top: 30px;
      padding-bottom: 20px;
}

.box p a{
    background: -webkit-linear-gradient(#00FF85, #FCFF7E);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.box .contact{
    padding-bottom:40px ;
}

.box p{
    font-family: 'Poppins', sans-serif;
    color: #fff;
    text-align: center;
    font-weight: 200;
    width: 500px;
    margin: 0 auto;
}



.box span{
    background: -webkit-linear-gradient(#00FF85, #FCFF7E);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
}

.login{
    margin: 0 auto;
    background: -webkit-linear-gradient(#0d0d0d, #0d0d0d);
    width: 250px;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    box-shadow: 15px 15px 8px #000000;
    
}

.login form{
    margin: 0 auto;
    display: flex;
    flex-direction: column; 
    font-family: 'Poppins', sans-serif;
    font-weight: 100;
}

.login .left{
    display: flex;
    justify-content: center;
    align-items: center;
}

.login form input[type="email"],
input[type="password"] {
    text-align: center;
    padding: 20px 0;
    font-size: 1rem;
    background-color: transparent;
    border: none;
    border-bottom: solid 1px rgb(255, 255, 255);
    outline: none;
    color: #7affbe;
    font-weight: 100;
}

.login form input[type="email"]::placeholder,
input[type="password"]::placeholder {
  letter-spacing: 2px;
  transition: all 0.3s ease;
}


.login form input[type="email"]:hover::placeholder,
input[type="password"]:hover::placeholder {
  color: #7affbe;
}

.login form input[type="submit"]{
    margin-top: 30px;
    padding: 5px 10px;
    font-size: 12px;
    border-radius: 4px;
    border: 3px solid #6bfcb600;
    background: -webkit-linear-gradient(#00FF85, #FCFF7E);
    color: rgb(0, 0, 0);
    font-weight: 400;
}

.login form input[type="submit"]:hover{
    box-shadow: 6px 6px 20px #000000;
}


</style>