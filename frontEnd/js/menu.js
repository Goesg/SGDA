if(sessionStorage.userId == " " || sessionStorage.userId == undefined || sessionStorage.userId == null || sessionStorage.userId == "null" ){
    alert('logue se em nosso sistema')
    window.location.href = "/frontEnd/index.html"
}
let userId = sessionStorage.userId

fetch(`http://localhost:8787/condomino/${userId}`).then(result => result.json()).then(user => {
  $('#UserName').html(user.nome)
  $('#apartamento').html(user.cpf)
})

//SISTEMA DE LOGOUT
$('.logout').click(()=>{
    sessionStorage.userName = null
    sessionStorage.userEmail = null
    sessionStorage.userCpf = null
    sessionStorage.userApartamento = null
    sessionStorage.userId = null
    window.location.href = "/frontEnd/index.html"
})

// EXIBIR INFOS BÁSICAS DO USUARIO
$('#meusDados').click(()=>{
    $('#formDisplay').css('display','none')
    $('#mensagemDisplay').css('display','none')
    $('#tabelaDisplay').css('display','flex')
    fetch(`http://localhost:8787/condomino/${userId}`).then(result => result.json()).then(user => {
        $("#tabelaDisplay").html(` 
            <table class="table table-bordered table-striped mb-0">
                <thead>
                    <tr>
                    <th scope="col">Cpf</th>
                    <td>${user.cpf}</td>
                    <tr>
                    <th scope="col">Nome</th>
                    <td>${user.nome}</td>
                    </tr>
                    <tr>
                    <th scope="col">Email</th>
                    <td>${user.email}</td>
                    </tr>
                    <tr>
                    <th scope="col">Login</th>
                    <td>${user.login}</td>
                    </tr>
                    <tr>
                    <th scope="col">Data de nascimento</th>
                    <td>${user.dataNascimento}</td>
                    </tr>
                    <tr>
                    <th scope="col">Sexo</th>
                    <td>${user.sexo}</td>
                    </tr>
                    <tr>
                    <th scope="col">estadoCivil</th>
                    <td>${user.estadoCivil}</td>
                    </tr>
                    <tr>
                    <th scope="col">Rg</th>
                    <td>${user.rg}</td>
                    </tr>
                    <tr>
                    <th scope="col">Cep</th>
                    <td>${user.cep}</td>
                    </tr>
                    <tr>
                    <th scope="col">Telefone</th>
                    <td>${user.telefone}</td>
                    </tr>
                    <tr>
                    <tr>
                    <th scope="col">Dependentes</th>
                    <td>${user.dependentes}</td>
                    </tr>
                    <th scope="col">Profissão</th>
                    <td>${user.profissao}</td>
                    </tr>
                    <tr>
                    <th scope="col">Apartamento</th>
                    <td>${user.apartamento}</td>
                    </tr>
                    <th scope="col">Conta</th>
                    <td> <a href="http://localhost:8787/boleto/view/${userId}"> <button id="btnBoleto"> Imprimir Boleto </button></a>  </td>
                    </tr>

                  
                </thead>
                <tbody>
                   
                </tbody>         
            </table>
        `);
    }) 
})

// EXIBIR FUNCIONÁRIOS
$('#tabelaFuncionarios').click(()=>{
  $('#formDisplay').css('display','none')
  $('#mensagemDisplay').css('display','none')
  $('#tabelaDisplay').css('display','flex')
  fetch(`http://localhost:8787/funcionarios`).then(result => result.json()).then(dados => {
    $("#tabelaDisplay").html(` 
    <table class="table table-bordered table-striped mb-0">
    <thead>
    <tr>
    <th scope="col">Nome</th>
    <th scope="col">Email</th>
    <th scope="col">Telefone</th>
                  <th scope="col">Cargo</th>
                  <th scope="col">Ativo</th>
                  </tr>
                  </thead>
              <tbody>
                 
              </tbody>         
          </table>
      `);

      dados.forEach(element => {
        $("tbody").prepend(`  
                <tr>
                <td scope="col">${element.nome}</td>
                <td scope="col">${element.email}</td>
                <td scope="col">${element.telefone}</td>
                <td scope="col">${element.cargo}</td>
                <td scope="col">${element.ativo}</td>
                </tr> 
                `);
              });
  }) 
})

// EXIBIR PRESTADORES
$('#tabelaPrestadores').click(()=>{
  $('#formDisplay').css('display','none')
  $('#mensagemDisplay').css('display','none')
  $('#tabelaDisplay').css('display','flex')
  fetch(`http://localhost:8787/prestadores`).then(result => result.json()).then(dados => {
      $("#tabelaDisplay").html(` 
      <table class="table table-bordered table-striped mb-0">
              <thead>
                  <tr>
                  <th scope="col">Nome</th>
                  <th scope="col">Celular</th>
                  <th scope="col">Telefone</th>
                  <th scope="col">Cargo</th>
                  </tr>
                  </thead>
                  <tbody>
                 
              </tbody>         
          </table>
          `);

      dados.forEach(element => {
        $("tbody").prepend(`  
                <tr>
                <td scope="col">${element.nome}</td>
                <td scope="col">${element.celular}</td>
                <td scope="col">${element.telefone}</td>
                <td scope="col">${element.cargo}</td>
                </tr> 
    `);
  });
  }) 
})

// EXIBIR EVENTOS
$('#tabelaEventos').click(()=>{
  $('#formDisplay').css('display','none')
  $('#mensagemDisplay').css('display','none')
  $('#tabelaDisplay').css('display','flex')
  fetch(`http://localhost:8787/eventos`).then(result => result.json()).then(dados => {
      $("#tabelaDisplay").html(` 
          <table class="table table-bordered table-striped mb-0">
              <thead>
                  <tr>
                  <th scope="col">Evento</th>
                  <th scope="col">Tipo</th>
                  <th scope="col">Data</th>
                  <th scope="col">Descrição</th>
                  </tr>
              </thead>
              <tbody>
                 
              </tbody>         
          </table>
      `);

      dados.forEach(element => {
        $("tbody").prepend(`  
                <tr>
                <td scope="col">${element.nome}</td>
                <td scope="col">${element.tipo}</td>
                <td scope="col">${element.data}</td>
                <td scope="col">${element.descricao}</td>
                </tr> 
    `);
    });
  }) 
})

// EXIBIR NOTICIAS
$('#tabelaNoticias').click(()=>{
  $('#formDisplay').css('display','none')
  $('#mensagemDisplay').css('display','none')
  $('#tabelaDisplay').css('display','flex')
  fetch(`http://localhost:8787/noticias`).then(result => result.json()).then(dados => {
      $("#tabelaDisplay").html(` 
          <table class="table table-bordered table-striped mb-0">
              <thead>
              <tr>
                  <th scope="col">Titulo</th>
                  <th scope="col">Data da publicação</th>
                  <th scope="col">Conteúdo</th>
                  </tr>
              </thead>
              <tbody>
                 
              </tbody>         
          </table>
      `);
      
      dados.forEach(element => {
        $("tbody").prepend(`  
                <tr>
                <td scope="col">${element.titulo}</td>
                <td scope="col">${element.data}</td>
                <td scope="col">${element.conteudo}</td>
                </tr> 
    `);
  });
  }) 
})

// EXIBIR MINHAS SOLICITACOES
$('#tabelaSolicitacoes').click(()=>{
  $('#formDisplay').css('display','none')
  $('#mensagemDisplay').css('display','none')
  $('#tabelaDisplay').css('display','flex')
  fetch(`http://localhost:8787/solicitacao/idCondomino/${userId}`).then(result => result.json()).then(dados => {
      $("#tabelaDisplay").html(` 
          <table class="table table-bordered table-striped mb-0">
              <thead>
              <tr>
                  <th scope="col">Imóvel</th>
                  <th scope="col">Proprietário</th>
                  <th scope="col">Apartamento</th>
                  <th scope="col">Bloco</th>
                  <th scope="col">Data da solicitação</th>
                  <th scope="col">Registro</th>
                  <th scope="col">Tipo</th>
                  <th scope="col">Observação</th>
                  </tr>
              </thead>
              <tbody>
                 
              </tbody>         
          </table>
      `);
      
      dados.forEach(element => {
        $("tbody").prepend(`  
                <tr>
                <td scope="col">${element.codMovel}</td>
                <td scope="col">${element.proprietario}</td>
                <td scope="col">${element.apartamento}</td>
                <td scope="col">${element.bloco}</td>
                <td scope="col">${element.dataRegistro}</td>
                <td scope="col">${element.numeroRegistro}</td>
                <td scope="col">${element.tipo}</td>
                <td scope="col">${element.observacao}</td>
                </tr> 
    `);
  });
  }) 
})

// EXIBIR MINHAS RESERVAS
$('#tabelaReserva').click(()=>{
  $('#formDisplay').css('display','none')
  $('#mensagemDisplay').css('display','none')
  $('#tabelaDisplay').css('display','flex')
  fetch(`http://localhost:8787/reservas/idCondomino/${userId}`).then(result => result.json()).then(dados => {
      $("#tabelaDisplay").html(` 
          <table class="table table-bordered table-striped mb-0">
              <thead>
              <tr>
                  <th scope="col">Tipo</th>
                  <th scope="col">Proprietário</th>
                  <th scope="col">Data</th>
                  <th scope="col">Horário</th>
                  <th scope="col">Descrição</th>
                  </tr>
              </thead>
              <tbody>
                 
              </tbody>         
          </table>
      `);
      
      dados.forEach(element => {
        $("tbody").prepend(`  
                <tr>
                <td scope="col">${element.tipo}</td>
                <td scope="col">${element.nomeCondomino}</td>
                <td scope="col">${element.data}</td>
                <td scope="col">${element.horario}</td>
                <td scope="col">${element.descricao}</td>
                </tr> 
    `);
  });
  }) 
})

// EXIBIR MINHAS RESERVAS
$('#tabelaEncomendas').click(()=>{
  $('#formDisplay').css('display','none')
  $('#mensagemDisplay').css('display','none')
  $('#tabelaDisplay').css('display','flex')
  fetch(`http://localhost:8787/encomendas/idCondomino/${userId}`).then(result => result.json()).then(dados => {
      $("#tabelaDisplay").html(` 
          <table class="table table-bordered table-striped mb-0">
              <thead>
              <tr>
                  <th scope="col">Nome</th>
                  <th scope="col">Entregue</th>
                  <th scope="col">Apartamento</th>
                  <th scope="col">Status</th>
                  </tr>
              </thead>
              <tbody>
                 
              </tbody>         
          </table>
      `);
      
      dados.forEach(element => {
        $("tbody").prepend(`  
                <tr>
                <td scope="col">${element.nome}</td>
                <td scope="col">${element.dataRegistro}</td>
                <td scope="col">${element.apartamento}</td>
                <td scope="col">${element.status}</td>
                </tr> 
    `);
  });
  }) 
})