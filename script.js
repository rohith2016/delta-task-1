
var namev,idv,csv,wev,punv,knv,comv,ratv,x;
function newmentee() {

}

function submit2(e){
    e.preventDefault();
    e.stopPropagation();
    x=document.getElementById("details");
    idv=x["ID"].value;
    csv=x["CS"].value;
    wev=x["WE"].value;
    punv=x["pun"].value;
    comv=x["com"].value;
    knv=x["KN"].value;
    ratv=x["rat"].value;
    
    document.getElementById("name").innerHTML += "name:" + namev + "<br>";
    document.getElementById("ID").innerHTML += "ID:" + idv + "<br>";
    document.getElementById("CS").innerHTML += "coding skills" + csv + "<br>";
    document.getElementById("WE").innerHTML += "work etcs:" + wev + "<br>";
    document.getElementById("pun").innerHTML += "punctuality:" + punv + "<br>";
    document.getElementById("KN").innerHTML += "knowledge:" + knv + "<br>";
    document.getElementById("com").innerHTML += "comments:" + comv + "<br>";
    document.getElementById("rat").innerHTML += "rating:" + ratv + "<br>";
    return false;
    
}

function colour() {
    if (ratv > 4)
        return darkgreen;
    else if (ratv > 3)
        return green;
    else if (ratv > 2)
        return yellow;
    else if (ratv > 1)
        return orange;
    else
        return red;
}
document.getElementById("details").addEventListener("submit",submit2,false);
