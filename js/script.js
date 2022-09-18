function myfunction() {
  alert("We have not yet add Json to our website. So user can not search the particular product they are looking for but instead they can use our drop down menu option in top navigation bar to find their desired match. Thank you :)");
}
var x = 1;
document.getElementById("dark-mode").onclick = function(){Dark_Light()};

function Dark_Light(){
    x++;
    if(x % 2 == 0){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.getElementById("head_one").style.color = "white";
        document.getElementById("head_two").style.color = "white";
        document.getElementById("foot").style.backgroundColor = "white";
        document.getElementById("foot").style.color = "black";
    }
    else{
        document.body.style.color = "black";
        document.body.style.backgroundColor = "white";
        document.getElementById("foot").style.backgroundColor = "black";
        document.getElementById("foot").style.color = "white";
        document.getElementById("head_two").style.color = "black";
        document.getElementById("head_one").style.color = "black";
    }
}