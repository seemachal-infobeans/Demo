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
  
    alert("Form data has been stored in local storage.");
})