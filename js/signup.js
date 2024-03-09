document.addEventListener("DOMContentLoaded", function () {
  const signUp = document.getElementById("submit");

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-!@$%^&*()_+={}[\]:;<>,.?\\|/])[A-Za-z\d-!@$%^&*()_+={}[\]:;<>,.?\\|/]{8,}$/;

    return passwordRegex.test(password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const address = document.getElementById("address").value
      ? document.getElementById("address").value
      : "null";
    const gender =
      document.querySelector('input[name="gender"]:checked')?.value ||
      "not specified";
    const city = document.getElementById("city").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!fullName || !gender || !city || !username || !password) {
      alert(
        "All fields, except for the address, email, and password, must be filled."
      );
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!isValidPassword(password)) {
      alert(
        "Password should be at least 8 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character and it shouldnt contain blank spaces."
      );
      return;
    }

    const formData = {
      fullName,
      address,
      gender,
      city,
      username,
      email,
      password,
    };

    console.log("Form Data:", formData);

    document.getElementById("fullName").value = "";
    document.getElementById("address").value = "";
    document.getElementById("city").value = "tokyo";
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";

    const userDataKey = `signUpData_${Date.now()}`;
    localStorage.setItem(userDataKey, JSON.stringify(formData));
  };

  signUp.addEventListener("click", handleSubmit);
});
