<?php
// Connexion à la base de données
$servername = "localhost";
$username = "root";
$password = "";
$database = "OmnesMarketPlace";
 
$conn = new mysqli($servername, $username, $password, $database);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Récupération des données de Connexion
$username = $_POST['username'];
$passwordConnexion = $_POST['passwordConnexion'];

// Requête pour vérifier l'utilisateur dans la table ConnexionUser
$sqlAdministrateurs = "SELECT * FROM Administrateurs WHERE IdentifiantUser='$username' AND MotdePasse='$passwordConnexion'";
$resultAdministrateurs = $conn->query($sqlAdministrateurs);
$sqlClients = "SELECT * FROM Clients WHERE IdentifiantUser='$username' AND MotdePasse='$passwordConnexion'";
$resultClients = $conn->query($sqlClients);
$sqlFournisseurs = "SELECT * FROM Fournisseurs WHERE IdentifiantUser='$username' AND MotdePasse='$passwordConnexion'";
$resultFournisseurs = $conn->query($sqlFournisseurs);

// Vérification du résultat de la requête
if ($resultAdministrateurs->num_rows > 0) || ($resultClients->num_rows > 0) || ($resultFournisseurs->num_rows > 0){
    // L'utilisateur existe dans la base de données
    echo "Connexion réussie!";
}

else {
    // L'utilisateur n'existe pas ou les informations d'identification sont incorrectes
    echo "Identifiants incorrects. Veuillez réessayer.";
}

// Vérification si le formulaire d'inscription est soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupération des données d'Inscription
    $familyName = $_POST['familyName'];
    $firstName = $_POST['firstName'];
    $age = $_POST['age'];
    $email = $_POST['email'];
    $adresse_postale = $_POST['AdressePostale'];
    $passwordInscription = $_POST['passwordInscription'];
    $photo = $_POST['photo'];
    $role = $_POST['role'];

    // Vérification si l'adresse e-mail est déjà utilisée
    $sqlAdministrateur = "SELECT * FROM Administrateurs WHERE Adresse_email = '$email'";
    $sqlClient = "SELECT * FROM Clients WHERE Adresse_email = '$email'";
    $sqlFournisseur = "SELECT * FROM Fournisseurs WHERE Adresse_email = '$email'";
    
    $resultClient = $conn->query($sqlClient);
    $resultFournisseur = $conn->query($sqlFournisseur);
    $resultAdministrateur = $conn->query($sqlAdministrateur);

    if ($resultClient->num_rows > 0) || ($resultFournisseur->num_rows > 0) || ($resultAdministrateur->num_rows > 0) {
        echo "Cette adresse e-mail est déjà utilisée. Veuillez choisir une autre adresse.";
    }
    
    else {
        // Insertion des données dans la table correspondante (Clients, Fournisseurs, Administrateurs)
        if ($role == "Client") {
            $sql = "INSERT INTO Clients (Nom, Prenom, Age, Adresse_email, Adresse_postale, MotdePasse, Photo, DateCreation)
                    VALUES ('$familyName', '$firstName', '$age', '$email', '$adresse_postale', '$passwordInscription', '$photo', NOW())";
        } 
        
        elseif ($role == "Vendeur") {
            $sql = "INSERT INTO Fournisseurs (Nom, Prenom, Age, Adresse_email, Adresse_postale, MotdePasse, Photo, DateCreation)
                    VALUES ('$familyName', '$firstName', '$age', '$email', '$adresse_postale', '$passwordInscription', '$photo', NOW())";
        }
        
        elseif ($role == "Administrateur") {
            $sql = "INSERT INTO Administrateurs (Nom, Prenom, Age, Adresse_email, Adresse_postale, MotdePasse, Photo, DateCreation)
                    VALUES ('$familyName', '$firstName', '$age', '$email', '$adresse_postale', '$passwordInscription', '$photo', NOW())";
        }
        
        if ($conn->query($sql) === TRUE) {
            echo "Inscription réussie !";
            // Redirection vers la page de connexion ou autre page de confirmation
        }
        
        else {
            echo "Erreur lors de l'inscription : " . $conn->error;
        }
    }
}

// Fermeture de la connexion
$conn->close();
?>
