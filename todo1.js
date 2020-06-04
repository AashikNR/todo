var arr = [];

function add(){
    document.getElementById("todos").innerHTML = "";
    event.preventDefault();
    var new_value = document.getElementById('task').value;
    const newObj = {id:arr.length,task:new_value}
    arr.push(newObj);
    console.log(arr);
    document.getElementById("add").style.display = "block";
    document.getElementById("edit").style.display = "none";
    display();
}


function remove(){
    document.getElementById("todos").innerHTML = "";
    const id = this.getAttribute('id');
    arr.splice(id, 1);
    console.log(arr);
    document.getElementById("add").style.display = "block";
    document.getElementById("edit").style.display = "none";
    display();
}

function edit() {
    document.getElementById("todos").innerHTML = "";
    document.getElementById("edit").style.display = "block";
    document.getElementById("add").style.display = "none";
    const id = this.getAttribute('id');
    var  edit_value = arr[id]["task"];
    document.getElementById("task").value = edit_value;
    arr.splice(id, 1);
    display();

}

function display() {
    const values = document.getElementById("todos");
    for(var i=0; i < arr.length; i++) {
        values.innerHTML += "<li>"+arr[i]["task"]+"</li>";

        const btn1 = document.createElement("BUTTON");
        btn1.setAttribute("id" , i);
        btn1.setAttribute("class" , "edit");
        btn1.innerHTML = "EDIT";
        document.querySelector('#todos').appendChild(btn1);

        const btn2 = document.createElement("BUTTON");
        btn2.setAttribute("id" , i);
        btn2.setAttribute("class" , "remove");
        btn2.innerHTML = "DELETE";
        document.querySelector('#todos').appendChild(btn2);

        document.getElementsByClassName('remove')[i].addEventListener('click', remove);
        document.getElementsByClassName('edit')[i].addEventListener('click', edit);

        document.getElementById("task").value = "";
        

    };
}
 
document.getElementById('add').addEventListener('click', add);
document.getElementById('edit').addEventListener('click', add);
display();