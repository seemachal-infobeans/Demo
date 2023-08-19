function displayUserData(userData) {
    var list = document.getElementById("submissionList");
    list.innerHTML = ''; // Clear the list
  
    userData.forEach(function(data, index) {
      var listItem = document.createElement("li");
      listItem.className = "list-group-item d-flex justify-content-between align-items-center";
      listItem.innerHTML = data.name + " - " + data.email + " - " + data.mobile;
      
      var deleteButton = document.createElement("button");
      deleteButton.className = "btn btn-danger btn-sm";
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function() {
        userData.splice(index, 1); // Remove the submission from the array
        localStorage.setItem("formData", JSON.stringify(userData));
        displayUserData(userData); // Re-render the list
      });
      
      listItem.appendChild(deleteButton);
      list.appendChild(listItem);
    });
  }


document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var address = document.getElementById("address").value;
  
    // Create a new entry with the current form data
    var newEntry = {
      name: name,
      email: email,
      mobile: mobile,
      address: address
    };
    
    // Retrieve existing data from local storage
    var existingDataJSON = localStorage.getItem("formData");
   
    var existingData = existingDataJSON ? JSON.parse(existingDataJSON) : [];

  
  
    // Append the new entry to the existing data
    existingData.push(newEntry);
  
    // Store the updated data back in local storage
    localStorage.setItem("formData", JSON.stringify(existingData));
  
    document.getElementById("myForm").reset();
    displayUserData(existingData);
    alert("Form data has been stored in local storage.");
})