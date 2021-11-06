$('button').click(()=>{ 
    if($('#inputPassword').val() != $('#inputPasswordConfirme').val()) alert("as senhas não são iguais")

    else{
        let recovery = {
            cpf: $('#inputCpf').val(),
            novaSenha: $('#inputPassword').val()
        }
        axios.post('http://localhost:8787/recovery/condomino',recovery).then((resolve)=>{
            let dados = resolve.data
            if(dados.erro) alert(dados.erro)
            else{
                alert(dados.Ok)
                sessionStorage.userName = dados.user.nome
                sessionStorage.userCpf = dados.user.cpf
                sessionStorage.userEmail = dados.user.email
                sessionStorage.userApartamento = dados.user.apartamento
                sessionStorage.userId = dados.user.id
                window.location.href = ('/frontEnd/menu.html') 
            }
        })
    }
})  