let intervalId;

function verifie() {
    nettoieMessages();
    let okNom = verifieNom();
    let okTelephone = verifieTelephone();
    let okCode = verifieCodeProduit();
    if (okNom && okTelephone && okCode) {
        document.getElementById("message").innerText = "Merci !";
        clearInterval(intervalId);
    }
}

function nettoieMessages() {
    document.getElementById("nom").innerText = "";
    document.getElementById("telephone").innerText = "";
    document.getElementById("code").innerText = "";
    document.getElementById("message").innerText = "";
}

function verifieNom() {
    let nom = document.getElementsByName("nom")[0];
    if (nom.value.trim() == '') {
        document.getElementById("nom").innerText = "Le nom ne doit pas vide !";
        return false;
    }
    return true;
}

function verifieTelephone() {
    let telephone = document.getElementsByName("telephone")[0];
    let spTelephone = document.getElementById("telephone");
    let r = new RegExp(/^[0-9]{3} [0-9]{3} [0-9]{4}$/);
    if (telephone.value.trim().match(r) == null) {
        spTelephone.innerText = "Le téléphone doit être de la forme 123 123 1234 !";
        return false;
    }
    return true;
}

function verifieCodeProduit() {
    let code = document.getElementsByName("code")[0];
    let spCode = document.getElementById("code");
    let r = new RegExp(/^F[0-9]{3}$/);
    if (code.value.trim().match(r) == null) {
        spCode.innerText = "Le code produit doit commencer par la lettre F majuscule puis 3 chiffres !";
        return false;
    }
    return true;
}

window.addEventListener('load', (event) => {
    intervalId = setInterval(function () {
        let value = parseInt(document.getElementById("time").innerText)-1;
        document.getElementById("time").innerText = value;
        if (value == 0) {
            document.forms[0].style.display = "none";
            clearInterval(intervalId);
        } 
    }, 1000);
});