var character= document.getElementById("character");
var block = document.getElementById("block");
var score=document.getElementById("score");
var namer =document.getElementById("namer");
var dog=document.getElementById("arm");
var hdog=document.getElementById("harm");
character.classList.add("elam");
character.classList.remove("kallan");
function jump(){
    if
     (character.classList.contains("animate"))
     {return}


    character.classList.add("animate");
    character.classList.remove("elam");
    setTimeout(() => {
        character.classList.add("elam");
     character.classList.remove("animate")
},500);
}
var checkDead = setInterval(function(){
   var characterTop =parseInt(window.getComputedStyle(character).getPropertyValue("top")) ;
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockLeft<110 && blockLeft>40 && characterTop>=220){
        block.style.animation="none";
        block.style.display="none";
        character.style.animation="none";
        character.style.display="none";
       score.style.display="none";
       namer.style.color="white";

       dog.style.background="url('restart\ 1.png')";
       dog.style.backgroundSize="cover";
       hdog.style.background="url('Group\ 1.png')";
       hdog.style.backgroundSize="cover";
    
        
    }

},10)