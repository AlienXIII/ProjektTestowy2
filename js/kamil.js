function funkcjaKamil(){
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
    funkcjaKamil();