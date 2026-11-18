const nomeC = document.getElementById("nomeC")
const cpfC = document.getElementById("cpfC")
const dataC = document.getElementById("dataC")
const salarioC = document.getElementById("salarioC")
const funcaoC = document.getElementById("funcaoC")
const funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || []

const cpfS = document.getElementById("cpfS")
const nomeS = document.getElementById("nomeS")
const salarioS = document.getElementById("salarioS")

const cpfD = document.getElementById("cpfD")
const nomeD = document.getElementById("nomeD")
const funcaoD = document.getElementById("funcaoD")
const salarioD = document.getElementById("salarioD")




function cadastrar_funcionario() {
  if (nomeC.value.trim() && cpfC.value.trim() && dataC.value.trim() && salarioC.value.trim()
    && funcaoC.value.trim()) {
    if (/^[A-Za-zÁ-ý\s]+$/.test(nomeC.value)) {
      if (/^\d{11}$/.test(cpfC.value)) {
        if (salarioC.value >= 0) {
          let existe = false
          for (let funcionario of funcionarios) {
            if (funcionario.cpf == cpfC.value)
              existe = true
          }
          if (!existe) {
            const funcionario = {
              nome: nomeC.value,
              cpf: cpfC.value,
              data: dataC.value,
              salario: salarioC.value,
              funcao: funcaoC.value,
              situacao: "Ativo"
            }
            funcionarios.push(funcionario)

            localStorage.setItem("funcionarios", JSON.stringify(funcionarios))
            alert("Funcionario Cadastrado com sucesso!")


          } else alert("Funcionario Já Cadastrado!")

        } else alert("Salario não pode ser Negativo")

      } else alert("CPF deve conter 11 numeros")

    } else alert("Nome so Aceita Letras , acentos e Espaço!")

  } else alert("Preencha todos os campos!")
}

function buscar_funcionario() {
  let existe = false
  let funcionario
  for (let f of funcionarios) {
    if (f.cpf == cpfS.value) {
      funcionario = f
      existe = true
    }

  }
    if ((funcionario.situacao) == "Demitido"){
     alert (" Funcionario ja foi demitido!")
     return
   }
  if (existe) {
    nomeS.value = funcionario.nome
    salarioS.value = funcionario.salario

  } else alert("Funcionario Não encontrado")

}

function alterar() {

  let existe = false
  let funcionario = -1
  for (let f of funcionarios) {
    funcionario++
    if (f.cpf == cpfS.value) {
      existe = true
      break
    }
  }
  if (existe) {


    if ((salarioS.value) < (funcionarios[funcionario].salario)) {
      alert(" Salario não pode ser menor que o atual!")
      return
    }
    funcionarios[funcionario].salario = salarioS.value
    localStorage.setItem("funcionarios", JSON.stringify(funcionarios))
    alert("Salario Alterado com sucesso!")
    cpfS.value = ""
    nomeS.value = ""
    salarioS.value = ""


  }
}

function buscar_funcionariodemitir() {
  let existe = false
  let funcionario
  for (let f of funcionarios) {
    if (f.cpf == cpfD.value) {
      funcionario = f
      existe = true
    }

  }
  if ((funcionario.situacao) == "Demitido") {
    alert(" Funcionario ja demitido!")
    return
  }

  if (existe) {
    nomeD.value = funcionario.nome
    funcaoD.value = funcionario.funcao
    salarioD.value = funcionario.salario

  } else alert("Funcionario Não encontrado")


}


function demitir() {

  let existe = false
  let funcionario = -1
  for (let f of funcionarios) {
    funcionario++
    if (f.cpf == cpfD.value) {
      existe = true
      break
    }
  }

  if (existe) {
    funcionarios[funcionario].situacao = "Demitido"
    localStorage.setItem("funcionarios", JSON.stringify(funcionarios))
    alert("Funcionario Demitido com sucesso!")
    cpfD.value = ""
    nomeD.value = ""
    funcaoD.value = ""
    salarioD.value = ""


  }
}

