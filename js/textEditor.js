// bold
document.getElementById("bold").addEventListener("click" , function(){
    let text = document.getElementById("input");
    text.style.fontWeight="900";
});

// italic
document.getElementById("italic").addEventListener("click" , function(){
    let text = document.getElementById("input");
    text.style.fontStyle="italic";
});

// Underline
document.getElementById("underline").addEventListener("click" , function(){
    let text = document.getElementById("input");
    text.style.textDecoration="underline";
});

// left Align:
document.getElementById("left").addEventListener("click" , function(){
    let text = document.getElementById("input");
    text.style.textAlign="left";
});

// center Align:
document.getElementById("center").addEventListener("click" , function(){
    let text = document.getElementById("input");
    text.style.textAlign="center";
});

// right Align:
document.getElementById("right").addEventListener("click" , function(){
    let text = document.getElementById("input");
    text.style.textAlign="right";
});

// justify align
document.getElementById("justify").addEventListener("click" , function(){

    let text = document.getElementById("input");
    text.style.textAlign="justify";
    
});


// Size:
document.getElementById("size").addEventListener("change" , function(e){

    if(e.target.value < 14){
        e.target.value = 14;
    }
    
    const text = document.getElementById('input');
    text.style.fontSize = `${e.target.value}px`;

});



// color event:
document.getElementById("color").addEventListener("change",function(event){
     let text = document.getElementById("input");
     text.style.color = event.target.value;
});






