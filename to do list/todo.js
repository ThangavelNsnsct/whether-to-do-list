function addTask() {
  var input = document.getElementById("taskInput").value;
  if (input === "") {
      alert("Please enter a task!");
  } else {
      var listItem = document.createElement("li");
      listItem.textContent = input;
      document.getElementById("taskList").appendChild(listItem);
      document.getElementById("taskInput").value = "";
      listItem.onclick = function() {
          this.parentNode.removeChild(this);
      };
  }
}