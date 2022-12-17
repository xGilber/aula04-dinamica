
var vacines = [];


function addVac(){
    event.preventDefault();
    var newVac ={
        "fNameVac": document.getElementById('fnamevac').value,
        "fQtdVac": document.getElementById('fqtdvac').value,
        "fClassVac": document.getElementById('fclassvac').value,
        "fValVac": document.getElementById('fvalvac').value

    }
    vacines.push(newVac);
    renderTable();
}



function renderTable(){
    let table = document.getElementById('tableVac');

    table.innerHTML = `                <tr>
    <th>Nome da Vacina</th>
    <th>Quantidade Disponível</th>
    <th>Classe da Vacina</th>
    <th>Validade da Vacina</th>
    <th>Remover</th>
    </tr>` ;


    for(i=0; i< vacines.length; i++){
        table.innerHTML = table.innerHTML + ` <tr>
        <td>${ vacines[i].fNameVac }</td>
        <td>${ vacines[i].fQtdVac }</td>
        <td>${ vacines[i].fClassVac }</td>
        <td>${ vacines[i].fValVac }</td>

        <td><img src="./src/img/trash.png" width="25px" height="25px" onclick="removeItem(${i})"></td>
        </tr>`

    }
}


function removeItem(index){
    vacines.splice(index,1);
    renderTable();
}