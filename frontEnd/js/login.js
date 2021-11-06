$('button').click(()=>{
    let login = {
        login: $('#inputEmail').val(),
        senha: $('#inputPassword').val()
    }
    axios.post('http://localhost:8787/login/condomino',login).then(response => {
        let dados = response.data
        console.log(dados.user)
        if(dados.Ok){
            sessionStorage.userName = dados.user.nome
            sessionStorage.userCpf = dados.user.cpf
            sessionStorage.userEmail = dados.user.email
            sessionStorage.userApartamento = dados.user.apartamento
            sessionStorage.userId = dados.user.id

            window.location.href = ('/frontEnd/menu.html') 
        }
        else{ alert(dados.erro)}
    })
}) 