if(sessionStorage.userEmail == " " || sessionStorage.userEmail == undefined || sessionStorage.userEmail == null || sessionStorage.userEmail == "null" ){
    alert('logue se em nosso sistema')
    window.location.href = "/SGDAHtml/index.html"
}

let userName = sessionStorage.userName
let userEmail = sessionStorage.userEmail
let userCpf = sessionStorage.userName
$('#UserName').html(userName)

$('.logout').click(()=>{
    sessionStorage.userName = null
    sessionStorage.userEmail = null
    sessionStorage.userCpf = null
    window.location.href = "/frontEnd/index.html"
})