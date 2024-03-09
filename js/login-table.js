document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.querySelector("#userTable tbody");
  
    // Retrieve all user data from localStorage
    const allUserData = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("logInData")) {
        const userDataString = localStorage.getItem(key);
        const userData = userDataString ? JSON.parse(userDataString) : null;
        if (userData) {
          allUserData.push(userData);
        }
      }
    }
  
    console.log("All User Data:", allUserData);
  
    allUserData.forEach((userData) => {
      const newRow = tableBody.insertRow();
      Object.values(userData).forEach((value) => {
        const cell = newRow.insertCell();
        cell.textContent = value;
      });
    });
  });
  