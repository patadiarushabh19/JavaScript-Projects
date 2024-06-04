var add = document.querySelector("#add");
var remove = document.querySelector("#remove");
var inp = document.querySelector("input");
var list = document.querySelector("#list");

add.addEventListener("click", function () {
    if (inp.value.trim() !== "") {
        var li = document.createElement('li');
        li.textContent = inp.value;
        list.appendChild(li);
        inp.value = ""; // Clear the input field
    }
}); 

remove.addEventListener("click", function () {
    var items = list.getElementsByTagName('li');
    if (items.length > 0) {
        list.removeChild(items[items.length - 1]);
    }
});
