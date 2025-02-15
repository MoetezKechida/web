var firstTextArea=document.querySelector("#firstTextArea");
var secondTextArea=document.querySelector("#secondTextArea");
var button=document.querySelector("#boutton");

button.addEventListener('click',function(){
    if(firstTextArea.value.trim()=="" || secondTextArea.value.trim()=="")
    {
        alert("il faut remplir les 2 champs pour ajouter un element");
    }
    else{
        var todoList=document.querySelector("#todoList");
        var newTask=document.createElement("li");
        newTask.className="list-group-item";
        newTask.innerText=firstTextArea.value+": "+secondTextArea.value;
        firstTextArea.value="";
        secondTextArea.value="";
        var trash=document.createElement("i");
        trash.className = "bi bi-trash";
        trash.style.position = "absolute";
        trash.style.right = "10px";
        trash.style.cursor = "pointer";
        newTask.appendChild(trash);
        todoList.appendChild(newTask);
        trash.addEventListener('click',function(){
            trash.parentNode.remove();
        });
    }
});
