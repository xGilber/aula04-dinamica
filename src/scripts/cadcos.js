var cosmetics = [];


function addCos(){
    event.preventDefault();
    var newCos ={
        "fTypeCos": document.getElementById('ftypecos').value,
        "fNameCos": document.getElementById('fnamecos').value,
        "fQtdCos": document.getElementById('fqtdcos').value,
        "fValCos": document.getElementById('fvalcos').value

    }
    cosmetics.push(newCos);
    renderTable();
}



function renderTable(){
    let table = document.getElementById('tableCos');

    table.innerHTML = `  <tr>
    <th>Tipo do Cosmético</th>
    <th>Nome do Cosmético</th>
    <th>Quantidade Disponível</th>
    <th>Validade do Cosmético</th>
    <th>Remover</th>
    </tr> `
    


    for(i=0; i< cosmetics.length; i++){
        table.innerHTML = table.innerHTML + ` <tr>
        <td>${ cosmetics[i].fTypeCos }</td>
        <td>${ cosmetics[i].fNameCos }</td>
        <td>${ cosmetics[i].fQtdCos }</td>
        <td>${ cosmetics[i].fValCos }</td>
        <td><img src="./src/img/trash.png" width="25px" height="25px" onclick="removeItem(${i})"></td>
        </tr>`

    }
}


function removeItem(index){
    cosmetics.splice(index,1);
    renderTable();
}