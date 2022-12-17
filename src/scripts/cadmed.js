var medicines = [];

function addMed(){
    event.preventDefault();
    var newMedicine ={
        "fNameMed": document.getElementById('fnamed').value,
        "fQtdMed": document.getElementById('fqtdmed').value,
        "fClassMed": document.getElementById('fclassmed').value
    }
    medicines.push(newMedicine);
    renderTable();
}



function renderTable(){
    let table = document.getElementById('tableMed');

    table.innerHTML = ` <tr>
    <th>Nome do Medicamento</th>
    <th>Quantidade Disponível</th>
    <th>Classe de Medicamento</th>
    <th>Remover</th>
    </tr>`;


    for(i=0; i< medicines.length; i++){
        table.innerHTML = table.innerHTML + ` <tr>
        <td>${ medicines[i].fNameMed }</td>
        <td>${ medicines[i].fQtdMed }</td>
        <td>${ medicines[i].fClassMed }</td>
        <td><img src="./src/img/trash.png" width="25px" height="25px" onclick="removeItem(${i})"></td>
        </tr>`

    }
}


function removeItem(index){
    medicines.splice(index,1);
    renderTable();
}