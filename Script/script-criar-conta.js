function cadastrar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "admin"){
        //location.href = "home.html";
        location.href = "index.html";
        alert('Usuário cadastrado com sucesso!');
    }else{
        alert('Erro ao realizar o cadastro!');
    }
}