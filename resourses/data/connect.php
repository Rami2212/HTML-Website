<?php
$servername = "premium304.web-hosting.com";
$username = "ramijlnk_RIST";
$password = "lifDBKv+upE-";
$dbname = "ramijlnk_RIST_contact_form";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = mysqli_real_escape_string($conn, $_POST['name']);
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$newsletter = isset($_POST['newsletter']) ? 1 : 0;
$message = mysqli_real_escape_string($conn, $_POST['message']);

$sql = "INSERT INTO form_submissions(name, email, newsletter, message) VALUES ('$name', '$email', '$newsletter', '$message')";

if ($conn->query($sql) === TRUE) {
    $to = "ramithapathmilarp@gmail.com";
    $subject = "New form submission";
    $body = "Name: $name\nEmail: $email\nNewsletter: " . ($newsletter ? "Yes" : "No") . "\nMessage: $message";
    $headers = "From: ramithapathmilarpi@gmail.com";

    mail($to, $subject, $body, $headers);

    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
