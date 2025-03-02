



<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);


$servername = "localhost";  // Mettre l'IP de ton serveur si ce n'est pas local
$username = "root";         // Ton utilisateur MySQL
$password = "";             // Ton mot de passe MySQL
$database = "nom_de_ta_bdd"; // Le nom de ta base de données

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connexion échouée: " . $conn->connect_error);
}

$nom = $_POST["nom"];
$email = $_POST["email"];
$message = $_POST["message"];

$sql = "INSERT INTO contacts (nom, email, message) VALUES ('$nom', '$email', '$message')";
if ($conn->query($sql) === TRUE) {
    echo "Données enregistrées avec succès";
} else {
    echo "Erreur: " . $conn->error;
}

$conn->close();
?>

