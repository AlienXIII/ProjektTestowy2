/**
 * Created by radma on 06/03/2018.
 */
function funkcjaJanka() {
    var guzik = document.getElementById("zmieniany");
    guzik.addEventListener("click", function () {
            if (guzik.className == "") {
                guzik.className = "klikniety";

            }
            else {
                guzik.className = "";
                /* var v1 = guzik.style.left;
                 console.log ("v1:"+v1);
                 var v2 = stringToInt(guzik.style.left);
                 console.log ("v2:"+v2);*/

                przesunOXWLewo(guzik);

            }
            // alert("Gorace programistki w twojej okolicy! Bez bullshitu! Bez kart kredytowych!")
        }
        , false);


}
var wLewo = true,x=10;
function przesunOXWLewo(element) {

    var intLeft = stringToInt(element.style.left);
    if (wLewo) {
        x = 10;
    }else{
        x=-10;
    }
    if (intLeft >= 100 || intLeft < 0) {
        wLewo = !wLewo;
    } else {
        element.style.left = (intLeft + x) + "px";
    }

    setTimeout(function () {
        przesunOXWLewo(element)
    }, 100);

}


function stringToInt(string) {
    var indexOfPixels = string.indexOf("px");
    if (indexOfPixels < 0) {
        return 0;
    }
    var liczbaAsString = string.substring(0, indexOfPixels);
    var int = liczbaAsString * 1;


    return int;

}
funkcjaJanka();