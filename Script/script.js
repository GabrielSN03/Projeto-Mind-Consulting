function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "admin"){
        //location.href = "home.html";
        location.href = "../public/index.html"
    }else{
        alert('Usuário ou senha incorretos!');
    }
}