let counter = 0;
document.getElementById("add-btn").addEventListener("click", function(){

    counter ++;

    const values = getInputValueInTextByID("input");
    const parent = document.getElementById("table-body");

    let tr = document.createElement("tr");
    tr.innerHTML = `
    
    <td> ${counter} </td>
    <td> ${values} </td>
    <td>
    <button class="btn btn-warning">Done</button>
    <button class="btn btn-danger">Drop</button>
    </td>
    `;

    parent.appendChild(tr);





});
