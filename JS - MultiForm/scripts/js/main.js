const sendToList = function(event, form, index){
    let value = form.elements["input-text"].value;
    let list = document.querySelectorAll(".list-receptor")[index];
    let listItem = document.createElement("li");
    listItem.innerText=value;
    list.appendChild(listItem);
}

window.onload = function(){
    for (let index = 0; index < document.forms.length; index++) {
        document.forms[index].addEventListener("submit", function(e){
            e.preventDefault();
            sendToList(e,this,index);})
    }
}