let btn = document.getElementById("menu");
let ul = document.getElementById("ul");

btn.addEventListener("click", function(){
    if(ul.style.display === "none" ){
        ul.style.display = "block";
        btn.innerHTML = "close";
    }else{
        ul.style.display = "none";
        btn.innerHTML = "menu";
    }
});