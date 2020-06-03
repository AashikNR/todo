
var arr = [];

function add(){
    event.preventDefault();
    var new_value = document.getElementById('task').value;
    arr.push(new_value);
    console.log(arr); 
    display();
}

function remove(){
    var id = this.getAttribute('id');
    arr.splice(id, 1);
    console.log(arr); 
    display();
}

function edit() {


}

function display() {
    var values = document.getElementById("todos");
    for(var i=0; i < arr.length; i++) {
        values.innerHTML += "<li>"+arr[i]+"</li>";

        var btn1 = document.createElement("BUTTON");
        btn1.setAttribute("id" , i);
        btn1.setAttribute("class" , "edit");
        btn1.innerHTML = "EDIT";
        document.querySelector('#todos').appendChild(btn1);

        var btn2 = document.createElement("BUTTON");
        btn2.setAttribute("id" , i);
        btn2.setAttribute("class" , "remove");
        btn2.innerHTML = "DELETE";
        document.querySelector('#todos').appendChild(btn2);

        document.getElementsByClassName('remove')[i].addEventListener('click', remove);
        document.getElementsByClassName('edit')[i].addEventListener('click', edit);
        

    };
}
 
document.getElementById('add').addEventListener('click', add);
display();