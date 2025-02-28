
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = htmlspecialchars($_POST['nom']);
    $email = htmlspecialchars($_POST['email']);
    $telephone = htmlspecialchars($_POST['telephone']);
    $message = htmlspecialchars($_POST['message']);

    $to = "votre-email@example.com"; // Remplacez par votre adresse email
    $subject = "Nouveau message de $nom";
    $messageBody = "
    Vous avez reçu un nouveau message de votre site web.

    Nom : $nom
    Email : $email
    Téléphone : $telephone

    Message :
    $message
    ";

    $headers = "From: $email" . "\r\n" .
        "Reply-To: $email" . "\r\n" .
        "Content-Type: text/plain; charset=UTF-8";

    if (mail($to, $subject, $messageBody, $headers)) {
        echo "Message envoyé avec succès!";
    } else {
        echo "Une erreur est survenue. Veuillez réessayer.";
    }
}
?>
