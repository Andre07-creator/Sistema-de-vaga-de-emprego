let choice;
let course = [];
function opportunityList() {
  let list = "";
  course.forEach(function (element, index) {
    list += `\nVaga ${index}: ${element.nameOpportunity} \nQuantidade de inscritos: ${element.candidates.length}\n`;
  });
  alert(list);
}
function createOpportunity() {
  let nameOpportunity = prompt("Digite o nome da vaga");
  let opportunityDescription = prompt("Digite a descrição da vaga");
  let limitDate = prompt("Digite uma data limite");
  let confirmOpportunity = confirm(
    `Voce confirma as informações?\nVaga: ${nameOpportunity} \nDescrição: ${opportunityDescription} \nData: ${limitDate}`
  );
  if (confirmOpportunity) {
    course.push({
      nameOpportunity,
      opportunityDescription,
      limitDate,
      candidates: [],
    });
    alert("vaga adicionda com sucesso!");
  } else {
    alert("vaga não adicionada!");
  }
}
function seeOpportunity() {
  let indexOpportunity = parseFloat(
    prompt("Digite o indice da vaga que voce está procurando")
  );
  const showOpportunity = course[indexOpportunity];
  let candidateList = "";
  if (showOpportunity) {
    if (showOpportunity.candidates.length) {
      candidateList = showOpportunity.candidates.reduce(function (
        textList,
        candidate
      ) {
        textList += " - " + candidate;
        return textList;
      });
    } else {
      candidateList = "Nenhum aplicação nesta vaga!";
    }
    alert(
      `Vaga ${indexOpportunity}: ${showOpportunity.nameOpportunity}\nDescrição: ${showOpportunity.opportunityDescription}\nData: ${showOpportunity.limitDate}\nQuantidade de candidatos: ${showOpportunity.candidates.length}\nLista de candidatos: ${candidateList}`
    );
  } else {
    alert("vai dar não");
  }
}
function candidateRegister() {
  let candidateName = prompt("Digite o seu nome");
  let opportunityIndex = parseFloat(prompt("Digite o indice da vaga"));
  const searchOpportunityIndex = course[opportunityIndex];
  if (searchOpportunityIndex) {
    const confirmCandidate = confirm(
      `Vaga ${opportunityIndex}: \n${searchOpportunityIndex.nameOpportunity}\nDescrição: ${searchOpportunityIndex.opportunityDescription}\nData: ${searchOpportunityIndex.limitDate}\nQuantidade de candidatos: ${searchOpportunityIndex.candidates.length}`
    );
    if (confirmCandidate) {
      searchOpportunityIndex.candidates.push(candidateName);
      alert("Inscrição efetuada");
    } else {
      alert("Inscrição não efetuada!");
    }
  } else {
    alert("vai dar não");
  }

  console.log(course);
}
function deleteOpportunity() {
  let deleteIndex = prompt("Digite o indice da vaga que deseja exluir");

  const opportunity = course[deleteIndex];
  if (opportunity) {
    const confirmar = confirm(
      "Tem certeza que deseja excluir a vaga " +
        deleteIndex +
        "?\n" +
        "Nome: " +
        opportunity.nameOpportunity +
        "\nDescrição: " +
        opportunity.opportunityDescription +
        "\nData limite: " +
        opportunity.limitDate
    );
    if (confirmar) {
      course.splice(deleteIndex, 1);
      alert("Vaga excluída.");
    } else {
      alert("Vaga não excluída.");
    }
  } else {
    alert("Vai dar não!");
  }
}
function intiliaze() {
  do {
    choice = prompt(`(1)Listar vagas disponíveis 
  \n(2) Criar um nova vaga
  \n(3)Visualizar uma vaga
  \n(4)Inscrever um candidato em uma vaga
  \n(5)Excluir uma vaga
  \n(6)Sair`);

    switch (choice) {
      case "1":
        opportunityList();
        break;
      case "2":
        createOpportunity();
        break;
      case "3":
        seeOpportunity();
        break;
      case "4":
        candidateRegister();
        break;
      case "5":
        deleteOpportunity();
        break;
      case "6":
        alert("See you!!!");
        break;
      default:
        alert("Digite uma opção valida");
    }
  } while (choice != "6");
}

intiliaze();
