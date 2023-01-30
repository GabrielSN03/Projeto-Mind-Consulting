function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "admin"){
        //location.href = "home.html";
        location.href = "http://localhost:3000"
    }else{
        alert('Usuário ou senha incorretos!');
    }
}