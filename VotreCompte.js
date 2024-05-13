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
    
        else if (currentPage.includes("Messagerie")) {
            $(".Discussion").css("background-color", "white");
            $(".Discussion").css("border", "1px solid #ff7f00");
        }
    });
});