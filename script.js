function mostraDepo(show,hide1,hide2,highlight,out1,out2){
    if(document.getElementById(show).style.display == "none"){
        document.getElementById(show).style = "display:block;";
        document.getElementById(highlight).style = "opacity:1;";
        document.getElementById(hide1).style = "display:none;";
        document.getElementById(out1).style = "opacity:0.5;";
        document.getElementById(hide2).style = "display:none;";
        document.getElementById(out2).style = "opacity:0.5;";
    } 
    else{
        document.getElementById(show).style = "display:none;";
        document.getElementById(highlight).style = "opacity:0.5;";
    }   
}

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if(document.documentElement.scrollTop > 10){
        document.getElementById("btnTop").style.display = "block";
    }
    else{
        document.getElementById("btnTop").style.display = "none";
    }
}

function backTop(){
    document.documentElement.scrollTop = 0;
}
