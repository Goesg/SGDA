$('button').click(()=>{
    let login = {
        email: $('#inputEmail').val(),
        password: $('#inputPassword').val()
    }
    axios.post('http://localhost:8787/login',login).then(response => {
        let dados = response.data
        console.log(dados.user)
        if(dados.Ok){
            sessionStorage.userName = dados.user.name
            sessionStorage.userCpf = dados.user.cpf
            sessionStorage.userEmail = dados.user.email
            window.location.href = ('/SGDAHtml/menu.html') 
        }
        else{ alert(dados.erro)}
    })
}) 