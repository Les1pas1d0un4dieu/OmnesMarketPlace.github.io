let numf = 1;
let numj = 1;
let maxFlash = 4;
let maxDujour = 5;
let ListeAlerteActuelle = [];

$(document).ready(function() {
    var currentPage = window.location.pathname;
    console.log("currentPage:", currentPage);
    if (currentPage.includes("Accueil")) {
        $(".Block1").css("background-color", "#ff7f00");
        $(".Block1").css("border", "1px solid #ff7f00");
    }

    else if (currentPage.includes("ToutParcourir")) {
        $(".Block2").css("background-color", "#ff7f00");
        $(".Block2").css("border", "1px solid #ff7f00");
    } 
    
    else if (currentPage.includes("Notifications")) {
        $(".Block3").css("background-color", "#ff7f00");
        $(".Block3").css("border", "1px solid #ff7f00");
    }
    
    else if (currentPage.includes("Panier")) {
        $(".Block4").css("background-color", "#ff7f00");
        $(".Block4").css("border", "1px solid #ff7f00");
    }
    
    else if (currentPage.includes("VotreCompte")) {
        $(".Block5").css("background-color", "#ff7f00");
        $(".Block5").css("border", "1px solid #ff7f00");
    }

    else if (currentPage.includes("InscriptionsConnexion")) {
        $(".Block6").css("background-color", "#ff7f00");
        $(".Block6").css("border", "1px solid #ff7f00");
    }

    // Afficher/Masquer le formulaire d'ajout d'alerte
    $(".OptionAlerte").click(function() {
        $(".addAlertForm").toggleClass("hidden");
    });

    // Alerte(s) actuelle(s)
    $(".alertList").append(ListeAlerteActuelle)

    // Fonction pour ajouter une alerte
    $(".addAlertButton").click(function() {
        // Récupérer les valeurs du formulaire
        var alertName = $(".alertName").val();
        var type = $(".TypeAchat").val();
        var category = $(".categoryArticle").val();
        var minPrice = $(".minPrice").val();
        var maxPrice = $(".maxPrice").val();

        if (alertName === "") {
            alertName = "Alert n°" + String(ListeAlerteActuelle.length +1)
        }

        if (type === "") {
            type = "Non renseigné"
        }

        if (category === "") {
            category = "Non renseigné"
        }

        if (minPrice === "") {
            minPrice = "Non renseigné "
        }

        if (maxPrice === "") {
            maxPrice = "Non renseigné"
        }

        if (minPrice !== "" && maxPrice !== "") {
            if (minPrice > maxPrice) {
                maxPrice = "Non renseigné"
            }
        }

        ListeAlerteActuelle.push("<div class=\"ALERT\" align=\"center\" class=\"Alert" + ListeAlerteActuelle.length +"\">" +
                                    "<div class=\"alertContent\">" +
                                        "<p>" + alertName + "</p>" +
                                        "<p>Catégorie d'article : " + category + "</p>" +
                                        "<p>Type d'achat : " + type + "</p>" +
                                        "<p>Prix minimum : " + minPrice + " &euro;</p>" +
                                        "<p>Prix maximum : " + maxPrice + " &euro;</p>" +
                                    "</div>" +
                                    "<button class=\"deleteAlertButton\"><i class=\"fas fa-trash\"></i></button>" +
                                "</div><br>");
        $(".alertList").empty();
        $(".alertList").append(ListeAlerteActuelle);

        // Ajouter du code pour mettre à jour l'affichage de la liste des alertes
        // Ajouter du code pour afficher un message de confirmation
    });


    $(document).on("click", ".deleteAlertButton", function() {
        var index = $(this).closest(".ALERT").index(); // Obtenir l'indice de l'élément à supprimer
        ListeAlerteActuelle.splice(index, 1); // Supprimer l'élément de la liste
        $(this).closest(".ALERT").remove(); // Supprimer l'élément du DOM
    });

    // Fonction pour charger la liste des alertes existantes
    function loadAlertList() {
        // Ajouter du code pour récupérer la liste des alertes depuis le serveur
        // Ajouter du code pour afficher la liste dans la div #alertList
    }

    // Appeler la fonction pour charger la liste des alertes au chargement de la page
    loadAlertList();

    // Ajouter d'autres fonctionnalités et interactions ici...
});