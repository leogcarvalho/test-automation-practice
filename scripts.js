document.addEventListener("DOMContentLoaded", function() {
    // Handle login form submission
    document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission behavior
        
        // Get user inputs
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        
        // Verify credentials (dummy check for demonstration)
        if (username === "admin" && password === "1234") {
            document.getElementById("login-status").textContent = "Login successful!";
            document.getElementById("login-status").style.color = "green";
        } else {
            document.getElementById("login-status").textContent = "Incorrect username or password.";
            document.getElementById("login-status").style.color = "red";
        }
    });

    // Show alert when alert button is clicked
    document.getElementById("alert-button").addEventListener("click", function() {
        alert("This is a test alert!");
    });

    // Change background color when color button is clicked
    document.getElementById("color-button").addEventListener("click", function() {
        document.body.style.backgroundColor = 
            document.body.style.backgroundColor === "lightblue" ? "#f5f5f5" : "lightblue";
    });

    // Show delayed message when delayed button is clicked
    document.getElementById("delayed-button").addEventListener("click", function() {
        // Hide the message initially
        const delayedMessage = document.getElementById("delayed-message");
        delayedMessage.style.display = "none";
        
        // Show the message after a 10-second delay
        setTimeout(function() {
            delayedMessage.style.display = "block";
        }, 10000); // 10 seconds delay
    });

    // File upload
    document.getElementById("file-upload").addEventListener("change", function(event) {
        const fileName = event.target.files[0]?.name || "No file chosen";
        document.getElementById("file-name").textContent = `Selected File: ${fileName}`;
    });

    // Modal/Popup Window
    document.getElementById("open-modal").addEventListener("click", function() {
        document.getElementById("modal").style.display = "block";
    });
    document.getElementById("close-modal").addEventListener("click", function() {
        document.getElementById("modal").style.display = "none";
    });

    // Tabbed Navigation - JavaScript to switch between tabs
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");
    tabButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Hide all content sections
            tabContents.forEach(content => content.style.display = "none");
            
            // Display the clicked tab's content
            document.getElementById(this.dataset.tab).style.display = "block";
        });
    });

});
