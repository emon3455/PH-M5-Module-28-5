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
    <button class="btn btn-warning mb-1 dones">Done</button>
    <button class="btn btn-danger drops">Drop</button>
    </td>
    `;

    parent.appendChild(tr);

    // const drops = document.getElementsByClassName("drops");
    // for (const drop of drops) {
    // drop.addEventListener("click" , function(event){
    //     event.target.parentNode.parentNode.style.display = "none";

    // });

});

// drop event
document.getElementById("add-btn").addEventListener("click", function(){

    const drops = document.getElementsByClassName("drops");

    for (const drop of drops) {
    drop.addEventListener("click" , function(event){
        event.target.parentNode.parentNode.style.display = "none";
        
    });

}

});

// drop event
document.getElementById("add-btn").addEventListener("click", function(){

    const dones = document.getElementsByClassName("dones");
    for (const done of dones) {
        done.addEventListener("click" , function(event){
            event.target.parentNode.parentNode.style.backgroundColor="pink";
        });
    }


});


// remove all event:
document.getElementById("clear-btn").addEventListener("click" , function(){
  
    const parent = document.getElementById("table-body");
    parent.style.display="none";
    counter=0;

});