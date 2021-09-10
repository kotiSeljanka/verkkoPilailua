function saka() {
    kohtalonSana = Math.round(Math.random() * 1000);
    if (kohtalonSana > 250) {
        return false;
    } else {
        return true;
    }
};

function nimea(pohja) {
    let chanssi = saka();
    console.log(chanssi);
    if (chanssi) {
        document.getElementById("titl").innerHTML = "Happy easter!!!";
    } else {
        document.getElementById("titl").innerHTML = pohja;
    }
};

function perakkaisSumma(kohdeN) {
    return (kohdeN * (kohdeN + 1)) / 2;
};

function perakkaisSummaAdv(kohdeN, alkuI) {
    return perakkaisSumma(kohdeN) - perakkaisSumma(alkuI);
};

function kirjoitaPerakkaisSumma(kohdeN, alkuI) {
    let juttu = perakkaisSummaAdv(kohdeN, alkuI);
    console.log(juttu);
    document.getElementById("summationResult").innerHTML = juttu.toString();
}