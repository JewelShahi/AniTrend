document.addEventListener("DOMContentLoaded", function () {
  const logIn = document.getElementById("submit");

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password) {
      alert(
        "All fields must be filled."
      );
      return;
    }

    const formData = {
      username,
      password,
    };

    console.log("Form Data:", formData);

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";

    const userDataKey = `logInData_${Date.now()}`;
    localStorage.setItem(userDataKey, JSON.stringify(formData));
  };

  logIn.addEventListener("click", handleSubmit);
});
