// document.addEventListener('DOMContentLoaded', function() {
//     const storedTasks = localStorage.getItem('submittedTasks');
//     if (storedTasks) {
//         submittedTasks = JSON.parse(storedTasks);
//         displayTasks(submittedTasks);
//     }
// });


taskForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let submittedTasks = [];

    const taskInput = document.getElementById("headinput").value.trim();
    const describeInput = document.getElementById("describeInput").value.trim();
    const dateInput = document.getElementById("dateInput").value;
    const statusInput = document.getElementById("statusSelect").value;
    const categoryInput = document.getElementById("categorySelect").value;
    const priorityInput = document.getElementById("priority").value;

    if (taskInput !== "" && describeInput!=="") {
    const dateParts = dateInput.split("-");
    const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;

    const newTask = {
        task: taskInput,
        description: describeInput,
        date: formattedDate,
        status: statusInput,
        category: categoryInput,
        priority: priorityInput
    };
    // localStorage.setItem('submittedTasks', JSON.stringify(submittedTasks));

    

    submittedTasks.push(newTask);
    // displayTasks(submittedTasks);

    const newTable = document.createElement("table");
    newTable.classList.add("task-table");
    newTable.innerHTML = `
        <thead>
            <tr>
                <th class="abc">Task</th>
                <th class="abc">Description</th>
                <th class="abc">Date</th>
                <th class="abc">Status</th>
                <th class="abc">Category</th>
                <th class="abc">Priority</th>
                <th class="abcd">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${taskInput}</td>
                <td>${describeInput}</td>
                <td>${formattedDate}</td>
                <td class="status-cell">${statusInput}</td>
                <td class="category-cell">${categoryInput}</td>
                <td>${priorityInput}</td>
                <td class="abcde">
                    
                    <button class="delete-button">Delete</button>
                    <button class="mark-as-complete-button">Mark As Complete</button>
                </td>
            </tr>
        </tbody>
    `;

    taskList.appendChild(newTable);

    // Clear input fields
    document.getElementById("headinput").value = null;
    document.getElementById("describeInput").value = null;
    document.getElementById("dateInput").value = null;
    document.getElementById("statusSelect").selectedIndex = 0;
    document.getElementById("categorySelect").selectedIndex = 0;
    document.getElementById("priority").selectedIndex = 0;
    }
    else{
            if(taskInput == ""){
                document.getElementById("headinput").value = null;
                alert("enter a valid task");
            }
            if(describeInput==""){
                document.getElementById("describeInput").value = null;
                alert("enter a valid description");

            }
        
    }
});

// Attach a click event listener to the Delete Button
taskList.addEventListener("click", function(event) {
    // Check if the clicked element is a delete button
    if (event.target.classList.contains("delete-button")) {
        const taskTable = event.target.closest(".task-table"); // Find the parent table
        taskTable.remove(); // Remove the entire table row (task)
    }
});
// Attach a click event listener to the Mark as Complete button
taskList.addEventListener("click", function(event) {
    // Check if the clicked element is a delete button
    if (event.target.classList.contains("mark-as-complete-button")) {
        const taskTable = event.target.closest(".task-table"); // Find the parent table
        const statusCell = taskTable.querySelector(".status-cell");
        statusCell.textContent = "Done"; // Update the status cell content
    }

});
// taskList.addEventListener("click", function(event) {
//     if (event.target.classList.contains("edit-button")) {
//         const taskRow = event.target.closest("tr"); // Find the parent row
//         const tdElements = taskRow.querySelectorAll("td");
        
//         tdElements.forEach(td => {
//             const originalValue = td.textContent.trim(); // Get the original text content
//             td.innerHTML = `<input type="text" class="edit-input" value="${originalValue}">`;
//         });

//         // Hide Edit button and show Update button
//         event.target.style.display = "none";
//         event.target.nextElementSibling.style.display = "inline-block";
//     }
    
//     if (event.target.classList.contains("update-button")) {
//         const taskRow = event.target.closest("tr"); // Find the parent row
//         const tdElements = taskRow.querySelectorAll("td");

//         tdElements.forEach(td => {
//             const inputValue = td.querySelector(".edit-input").value.trim(); // Get the edited input value
//             td.textContent = inputValue; // Update the text content
//         });

//         // Show Edit button and hide Update button
//         event.target.style.display = "none";
//         event.target.previousElementSibling.style.display = "inline-block";
//     }
// });
console.log(submittedTasks);