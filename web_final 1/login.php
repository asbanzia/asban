<?php
session_start();

// Database configuration
$servername = "localhost"; // Your database server
$username = "root"; // Your database username
$password = "Asbanzia2005*"; // Your database password
$dbname = "users_db"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if signup form is submitted
if (isset($_POST['signup'])) {
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Hash the password

    // Check if the email already exists
    $check_email = "SELECT * FROM users WHERE email='$email'";
    $res = $conn->query($check_email);

    if ($res->num_rows > 0) {
        echo "Email already exists!";
    } else {
        // Insert new user into the database
        $query = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$password')";

        if ($conn->query($query) === TRUE) {
            echo "Registration successful!";
        } else {
            echo "Error: " . $query . "<br>" . $conn->error;
        }
    }
}

// Check if signin form is submitted
if (isset($_POST['signin'])) {
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = $_POST['password'];

    // Fetch user data based on email
    $query = "SELECT * FROM users WHERE email='$email'";
    $res = $conn->query($query);

    if ($res->num_rows > 0) {
        $row = $res->fetch_assoc();

        // Verify password
        if (password_verify($password, $row['password'])) {
            $_SESSION['user_id'] = $row['id'];
            $_SESSION['user_name'] = $row['name'];
            echo "Login successful! Welcome, " . $_SESSION['user_name'];
        } else {
            echo "Invalid password!";
        }
    } else {
        echo "No user found with this email!";
    }
}

// Close connection
$conn->close();
?>
