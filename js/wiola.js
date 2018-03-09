(function funkcjaWioli(){
    var ut = document.getElementById("guzik2"); // zapisuje do zmiennej ut ,element o id guzik2

    ut.addEventListener("click",function(){ // lisner do ut dodajemy klik

        if(ut.className =="click"){
           ut.className = ""
           ut.style.left =0;
        }else{
            var v1 = ut.style.left;
            console.log("v1:"+v1);
             ut.className ="click"
             przesunONWprawo(ut);
            //ut.style.left = "100px";
        }
    });


    function przesunONWprawo (element){
        var intLeft=stringToInt(element.style.left);                              // skomentowac DOM
        if (intLeft <= 100) {
            element.style.left = (intLeft + 10) +"px";
            setTimeout (function() {przesunONWprawo(element)},100);
         }
     }

     function przesunONWlewo (element){
          var intRight=stringToInt(element.style.left);
          if (intRight <= 100){
               element.style.left=(intRight -10) + "px";
               setTimeout (function() {przesunONWlewo(element)},100);
             }
             else{
             element.style.left = 0;

             }
}


    function stringToInt(string){
        var indexOfPixels = string.indexOf("px");
        if (indexOfPixels <0){
            return 0;
        }
        var LiczbaAsString = string.substring(0,indexOfPixels);
        var int = LiczbaAsString *1;
        return int;
    }
})();
