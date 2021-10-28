$('button').click(()=>{
    let cadastro = {
        name: $('#inputName').val(),
        email: $('#inputEmail').val(),
        password: $('#inputPassword').val(),
        cpf: $('#inputCpf').val(),
    }
    axios.post('http://localhost:8787/condomino',cadastro).then(response => {
        let dados = response.data
        if(dados.Ok) {
            window.location.href = ('/frontend/menu.html') 
        }
        else{ alert(dados.erro)}
    })
}) 