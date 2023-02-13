let counter = 0;
document.getElementById("add-btn").addEventListener("click", function(){

    counter ++;

    const values = getInputValueInTextByID("input");
    const parent = document.getElementById("table-body");

    let tr = document.createElement("tr");
    tr.innerHTML = `
    
    <td class="counters"> ${counter} </td>
    <td class="values"> ${values} </td>
    <td>
    <button class="btn btn-warning mb-1">Done</button>
    <button class="btn btn-danger drops">Drop</button>
    </td>
    `;

    parent.appendChild(tr);

});


document.getElementById("clear-btn").addEventListener("click" , function(){

    
    const parent = document.getElementById("table-body");
    parent.innerHTML= "";
    counter=0;

});


document.getElementById("")