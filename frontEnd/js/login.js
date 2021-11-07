$('button').click(()=>{
    let login = {
        login: $('#inputEmail').val(),
        senha: $('#inputPassword').val()
    }
    axios.post('http://localhost:8787/login/condomino',login).then(response => {
        let dados = response.data
        console.log(dados.user)
        if(dados.Ok){
            sessionStorage.userId = dados.user.id
            sessionStorage.userNome = dados.user.nome
            sessionStorage.userApartamento = dados.user.apartamento
            sessionStorage.userCpf = dados.user.cpf

            window.location.href = ('/frontEnd/menu.html') 
        }
        else{ alert(dados.erro)}
    })
}) 