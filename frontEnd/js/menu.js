if(sessionStorage.userEmail == " " || sessionStorage.userEmail == undefined || sessionStorage.userEmail == null || sessionStorage.userEmail == "null" ){
    alert('logue se em nosso sistema')
    window.location.href = "/frontEnd/index.html"
}

let userName = sessionStorage.userName
let userEmail = sessionStorage.userEmail
let userCpf = sessionStorage.userName
let userApartamento = sessionStorage.userApartamento
let userId = sessionStorage.userId



$('#UserName').html(userName)
$('#apartamento').html(userCpf)


$('.logout').click(()=>{
    sessionStorage.userName = null
    sessionStorage.userEmail = null
    sessionStorage.userCpf = null
    sessionStorage.userApartamento = null
    sessionStorage.userId = null
    window.location.href = "/frontEnd/index.html"
})

$('#meusDados').click(()=>{
    $('#tabelaDisplay').css('display','flex')
    fetch(`http://localhost:8787/condomino/${userId}`).then(result => result.json()).then(user => {
        $('tbody').prepend(` 
            <tr>
            <td>${user.cpf}</td>
            <td>${user.email}</td>
            <td>${user.apartamento}</td>
            <td> <a href="http://localhost:8787/boleto/view/${userId}"> <button> Imprimir Boleto </button></a>  </td>
            </tr>
        
        `)
    })
    
})