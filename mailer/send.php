<?php
// Set headers to prevent CORS issues
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Get POST data
$postData = json_decode(file_get_contents("php://input"), true);
$response = [];

// Validate required fields
if (empty($postData['name']) || empty($postData['email']) || empty($postData['message'])) {
    $response = [
        'success' => false,
        'message' => 'Please fill in all required fields.'
    ];
    echo json_encode($response);
    exit;
}

// Sanitize inputs
$name = filter_var($postData['name'], FILTER_SANITIZE_STRING);
$email = filter_var($postData['email'], FILTER_SANITIZE_EMAIL);
$phone = isset($postData['phone']) ? filter_var($postData['phone'], FILTER_SANITIZE_STRING) : 'Not provided';
$subject = isset($postData['subject']) ? filter_var($postData['subject'], FILTER_SANITIZE_STRING) : 'New message from Abhi IT Solutions website';
$message = filter_var($postData['message'], FILTER_SANITIZE_STRING);

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $response = [
        'success' => false,
        'message' => 'Please provide a valid email address.'
    ];
    echo json_encode($response);
    exit;
}

// Email recipient - change this to your email
$to = "info@abhiitsolutions.com";

// Prepare email message
$emailBody = "Name: $name\n";
$emailBody .= "Email: $email\n";
$emailBody .= "Phone: $phone\n\n";
$emailBody .= "Message:\n$message\n";

// Email headers
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email
$mailSent = mail($to, $subject, $emailBody, $headers);

// Prepare response
if ($mailSent) {
    $response = [
        'success' => true,
        'message' => 'Thank you for your message. We will get back to you shortly.'
    ];
} else {
    $response = [
        'success' => false,
        'message' => 'There was a problem sending your message. Please try again later.'
    ];
}

// Send JSON response
echo json_encode($response);
