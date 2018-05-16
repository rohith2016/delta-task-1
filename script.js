var numberv, namev, idv, csv, wev, punv, knv, comv, ratv, x;
function newmentee() {
}

function submit2(e) {
    e.preventDefault();
    e.stopPropagation();
    x = document.getElementById("details");
   /* numberv = x["number"]. value;
    namev = x["name"].value;
    idv = x["ID"].value;
    csv = x["CS"].value;
    wev = x["WE"].value;
    punv = x["pun"].value;
    comv = x["com"].value;
    knv = x["KN"].value;
    ratv = x["rat"].value;*/

    var y = document.createElement('div');
    y.numberv=x["number"].value;
    y.namev=x["name"].value;
    y.idv=x["ID"].value;
    y.csv=x["CS"].value;
    y.wev=x["WE"].value;
    y.punv=x["pun"].value;
    y.comv=x["com"].value;
    y.knv=x["KN"].value; 
    y.ratv=x["rat"].value;
    document.getElementById("container").appendChild(y);
    
    document.getElementById("number2").innerHTML = "number:" + y.numberv + "<br>";
    document.getElementById("name2").innerHTML = "name:" + y.namev + "<br>";
    document.getElementById("ID2").innerHTML = "ID:" + y.idv + "<br>";
    document.getElementById("CS2").innerHTML = "coding skills" + y.csv + "<br>";
    document.getElementById("WE2").innerHTML = "work etcs:" + y.wev + "<br>";
    document.getElementById("pun2").innerHTML = "punctuality:" + y.punv + "<br>";
    document.getElementById("KN2").innerHTML = "knowledge:" + y.knv + "<br>";
    document.getElementById("com2").innerHTML = "comments:" + y.comv + "<br>";
    document.getElementById("rat2").innerHTML = "rating:" + y.ratv + "<br>";

        
    /*document.getElementById("y").appendChild(namev);
    document.getElementById("y").appendChild(idv);
    document.getElementById("y").appendChild(csv);
    document.getElementById("y").appendChild(wev);
    document.getElementById("y").appendChild(punv);
    document.getElementById("y").appendChild(knv);
    document.getElementById("y").appendChild(comv);
    document.getElementById("y").appendChild(ratv);*/
    //document.getElementById("box").appendChild(x);
    
    return false;

}
function edit2() {
    document.getElementById("details").contentEditable = true;
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
document.getElementById("details").addEventListener("submit", submit2, false);
//document.getElementById("change").onclick = edit2();

