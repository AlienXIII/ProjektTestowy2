/* function funkcjaKamil(){
        var guzik = document.getElementById("guzikkolor");
        guzik.addEventListener("click",function(){
            if (guzik.className == ""){
                guzik.className = "clicked"
                przesunOXWLewo(guzik);
                }
            else {guzik.className = "";

                var v1 = guzik.style.left;
                console.log ("v1:"+v1);
                var v2 = stringToInt(guzik.style.left);
                console.log ("v2:"+v2);

}
}
            ,false);
    }
function przesunOXWLewo (element){

    var intLeft = stringToInt(element.style.left);
    if (intLeft <= 100){
    element.style.left = (intLeft + 10) + "px";
    setTimeout (function(){
    przesunOXWLewo(element)},100);


    }else {

function wracaj (element){

    var intLeft = stringToInt(element.style.left);
    if  (intLeft >= 100){
    element.style.left = (intLeft - 10) + "px";
    setTimeout (function(){
    wracaj(element)},0);}
    }

    }
}

    function stringToInt(string){
        var indexOfPx = string.indexOf("px");
        if (indexOfPx < 0) {
            return 0;
        }
        var liczbaAsString = string.substring (0,indexOfPx);
        var int = liczbaAsString^1;
        return int;
    }
    funkcjaKamil(); */
function openTab (event, tabName) {
    var i, wzakladce, zakladka;
    wzakladce = document.getElementsByClassName("wzakladce");
    for (i = 0; i < wzakladce.length; i++) {
        wzakladce[i].style.display = "none";
    }
    zakladka = document.getElemntsByClassName("zakladka");
    for (i = 0; i < zakladka.length; i++) {
        zakladka[i].className = zakladka[i].className.replace("active", "");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}