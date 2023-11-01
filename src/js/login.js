document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        login();
    });
});

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("src/json/users.json")
        .then(response => response.json())
        .then(users => {
            console.log(users);

            const user = users.find(u => u.username === username && u.password === password);
            if (user) {
                // Successful login
                var role = user.role
                document.getElementById("message").textContent = "Login successful!";
                window.location.href = "src/html/home.html?role=" + role;
            } else {
                // Failed login
                document.getElementById("message").textContent = "Login failed. Please check your credentials.";
            }
        })
        .catch(error => {
            console.error("Error fetching user data:", error);
        });
}
