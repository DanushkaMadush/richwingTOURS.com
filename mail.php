<?php
$errors = '';
$myemail = 'info@richwingtours.com';

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$to = $myemail;
$email_subject = "Contact form submission: $name";
$email_body = "You have received a new message.\n".
              "Here are the details:\n\n".
              "Name: $name\n".
              "Email: $email\n".
              "Message:\n$message";
$headers = "From: $myemail\n";
$headers .= "Reply-To: $email";

mail($to, $email_subject, $email_body, $headers);
?>

