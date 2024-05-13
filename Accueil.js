let numf = 1;
let numj = 1;
let maxFlash = 4;
let maxDujour = 5;

$(document).ready(function() {
    var currentPage = window.location.pathname;
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

    else if (currentPage.includes("Messagerie")) {
        $(".Discussion").css("background-color", "white");
        $(".Discussion").css("border", "1px solid #ff7f00");
    }

    function slideImg() {
        // Ventes flash
        $(".imageFlash1").attr("src", "images/Ventes@Flash/Flash" + numf + ".png");
        $(".imageFlash2").attr("src", "images/Ventes@Flash/Flash" + ((numf % maxFlash) + 1) + ".png");
        $(".imageFlash3").attr("src", "images/Ventes@Flash/Flash" + ((numf % maxFlash) + 2) + ".png");
    
        // Sélection du jour
        $(".imageDujour1").attr("src", "images/Selection@du@Jour/Dujour" + numj + ".png");
        $(".imageDujour2").attr("src", "images/Selection@du@Jour/Dujour" + ((numj % maxDujour) + 1) + ".png");
        $(".imageDujour3").attr("src", "images/Selection@du@Jour/Dujour" + ((numj % maxDujour) + 2) + ".png");
    
        // Incrémentation des index
        numf = (numf % maxFlash) + 1;
        numj = (numj % maxDujour) + 1;
    
        // Réappeler slideImg après un certain délai
        setTimeout(slideImg, 4000); // On définit l'intervalle à 4000 millisecondes (4s)
    }
    
    // Démarrer le défilement initial
    slideImg();

    $(".prevFlash").click(function() { 
        if (numf > 1) {
            numf -=1;
            $(".imageFlash1").attr("src", "images/Ventes@Flash/Flash" + numf + ".png");
            $(".imageFlash2").attr("src", "images/Ventes@Flash/Flash" + String(numf+1) + ".png");
            $(".imageFlash3").attr("src", "images/Ventes@Flash/Flash" + String(numf+2) + ".png");
        }
    });

    $(".nextFlash").click(function() {
        if (numf < maxFlash) {
            numf +=1;
            $(".imageFlash1").attr("src", "images/Ventes@Flash/Flash" + numf + ".png");
            $(".imageFlash2").attr("src", "images/Ventes@Flash/Flash" + String(numf+1) + ".png");
            $(".imageFlash3").attr("src", "images/Ventes@Flash/Flash" + String(numf+2) + ".png");
        }
    });

    $(".prevDujour").click(function() { 
        if (numj >1) {
            numj -=1;
            $(".imageDujour1").attr("src", "images/Selection@du@Jour/Dujour" + numj + ".png");
            $(".imageDujour2").attr("src", "images/Selection@du@Jour/Dujour" + String(numj+1) + ".png");
            $(".imageDujour3").attr("src", "images/Selection@du@Jour/Dujour" + String(numj+2) + ".png");
        }
    });

    $(".nextDujour").click(function() {
        if (numj < maxDujour) {
            numj +=1;
            $(".imageDujour1").attr("src", "images/Selection@du@Jour/Dujour" + numj + ".png");
            $(".imageDujour2").attr("src", "images/Selection@du@Jour/Dujour" + String(numj+1) + ".png");
            $(".imageDujour3").attr("src", "images/Selection@du@Jour/Dujour" + String(numj+2) + ".png");
        }
    });
});