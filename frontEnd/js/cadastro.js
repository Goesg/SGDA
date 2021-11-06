$('button').click(()=>{
    let cadastro = {
        nome: $('#inputName').val(),
        email: $('#inputEmail').val(),
        login: $('#inputLogin').val(),
        apartamento: $('#inputApt').val(),
        senha: $('#inputPassword').val(),
        cpf: $('#inputCpf').val(),
    }
    axios.post('http://localhost:8787/condomino',cadastro).then(response => {
        let dados = response.data
        if(dados.Ok) {
            window.location.href = ('/frontEnd/menu.html') 
        }
        else{ alert(dados.erro)}
    })
}) 