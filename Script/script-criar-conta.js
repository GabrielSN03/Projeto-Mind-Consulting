function cadastrar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "admin"){
        //location.href = "home.html";
        location.href = "login.html";
        alert('Usuário cadastrado com sucesso!');
    }else{
        alert('Usuário ou senha incorretos!');
    }
}