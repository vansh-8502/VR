document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (email === "" || password === "") {
        alert("Both email and password are required!");
        return;
    }

    // Example logic for login
    // You would replace this with actual authentication logic
    alert("Login successful!");

    // Redirect based on role (assuming role selection is handled elsewhere)
    // window.location.href = "admin.html"; // Example redirection
});
