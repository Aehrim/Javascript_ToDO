// Import any required modules or libraries here

// Define your main function or entry point here
function main() {
console.log("Hello World!");
}

let ul = document.getElementById("ToDoUL")

// Add an Event Listener to the Button AddButton to make it Possible to append stuff to the UL List in the HTML File
function addul(list) {
    var add = document.getElementById("AddButton");
    add.addEventListener("click", function() {
        var ul = document.getElementById("ToDoUL");
        var input = document.getElementById("Task_Value").value;
        var li = document.createElement("li");
        li.innerHTML = input 
        ul.appendChild(li);
        input.value = ""
      });
};

// Remove the Last Added Element Easy as Fuck i guess
function clearul() {
    ul.removeChild(ul.lastElementChild);
}
// Main Function Call
main();