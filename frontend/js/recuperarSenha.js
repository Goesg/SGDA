$('button').click(()=>{ 
    if($('#inputPassword').val() != $('#inputPasswordConfirme').val()) alert("as senhas não são iguais")

    else{
        let recovery = {
            cpf: $('#inputCpf').val(),
            newPassword: $('#inputPassword').val()
        }
        axios.post('http://localhost:8787/recovery',recovery).then((resolve)=>{
            let dados = resolve.data
            if(dados.erro) alert(dados.erro)
            else{
                alert(dados.Ok)
                sessionStorage.userName = dados.user.name
                sessionStorage.userCpf = dados.user.cpf
                sessionStorage.userEmail = dados.user.email
                window.location.href = ('/frontend/menu.html') 
            }
        })
    }
})  