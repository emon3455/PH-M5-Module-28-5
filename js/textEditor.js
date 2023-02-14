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
// document.getElementById("size").addEventListener("click" , function(){

//     let fontSize = getInputValueInNumberByID("size");
//     let text = document.getElementById("input");
//     text.style.fontSize = fontSize+"px";

// });



