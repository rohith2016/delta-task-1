 
 
 var swap;
 var rating;




 function add() {                                       
    rating = document.getElementById("rating").value;
    console.log(rating);
    if(!(rating==1||rating==2||rating==3||rating==4||rating==5)){
        alert("value exceeds 5. Please retry.")
        return;
        }
    var Name = document.getElementById("name").value;
    var rNo = document.getElementById("ID").value;
    var comment=document.getElementById("comment").value;
    var row=document.getElementById('container').insertRow(-1);
    row.class="row";
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    var d=document.createElement("button");
    var txtNode = document.createTextNode("Delete");
    d.appendChild(txtNode);
    d.setAttribute("onclick","del(this)");
    row.appendChild(d);
    var edit=document.createElement("button");
    var node = document.createTextNode("Edit");
    edit.appendChild(node);
    edit.setAttribute("onclick","edit(this)");
    edit.setAttribute("id","edit");
    row.appendChild(edit);

    row.style.backgroundColor=color();

   
    cell1.innerHTML=Name;
    cell2.innerHTML=rNo;
    cell3.innerHTML=comment;
    cell4.innerHTML=rating;
    cell3.title=comment;
    cell1.title=Name;
    swap=true;
        
    } 
 


 function del(row){   //enables deletimg a row
     var line=row.parentNode.parentNode;
     line.removeChild(row.parentNode);
 
     }

function edit(e){    //enables editing
    var row=e.parentNode;
    var button=document.getElementById("edit");
    if (row.contentEditable == "true") {
        row.contentEditable = "false";
        var cells=row.getElementsByTagName('td');
        rating=cells[3].innerHTML;
        row.style.backgroundColor=color();
        button.innerHTML = "Edit"; 
        }
    else {
        row.contentEditable = "true";
        button.innerHTML = "Submit";
        row.style.backgroundColor="white";
        }
    }



  function sort() {          
      var table, rows, swap, i, row1, row2, condition;
      table = document.getElementById("container");
      swap = true;
      while (swap) {
          swap = false;
          rows = table.getElementsByTagName("tr");
          for (i = 1; i < (rows.length - 1); i++) {
              condition = false;
              row1 = rows[i].getElementsByTagName("td")[3];
              row2 = rows[i + 1].getElementsByTagName("td")[3];
      

              if (Number(row1.innerHTML) > Number(row2.innerHTML)) {
                  condition = true;
                  break;
                  }
             }
          if (condition) {
              rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
              swap = true;
              }
   
          }
     }


 function  color() {  
    var shade;
    if(rating==1)
        shade="red";
    else if(rating==2)
        shade="orange";
    else if(rating==3)
        shade="yellow ";
    else if(rating==4)
        shade="#adff2f";
    else if(rating==5)
        shade="green";

    return shade;

  }
 
