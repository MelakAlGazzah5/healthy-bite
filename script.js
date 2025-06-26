function calculerIMC() {
    var taille = parseFloat(document.getElementById("taille").value);
    var poids = parseFloat(document.getElementById("poids").value);
    var resultat = document.getElementById("resultat");
  
    if (!taille || !poids || taille <= 0 || poids <= 0) {
      resultat.textContent = "Veuillez entrer des valeurs valides.";
      resultat.style.color = "red";
      return;
    }
  
    var imc = poids / (taille * taille);
    var interpretation = "";
  
    if (imc < 18.5) {
      interpretation = "Maigreur";
      resultat.style.color = "#f57c00"; // orange
    } else if (imc < 25) {
      interpretation = "IMC normal";
      resultat.style.color = "#2e7d32"; // vert
    } else if (imc < 30) {
      interpretation = "Surpoids";
      resultat.style.color = "#fbc02d"; // jaune
    } else {
      interpretation = "Obésité";
      resultat.style.color = "#c62828"; // rouge
    }
  
    resultat.textContent = "Votre IMC est " + imc.toFixed(2) + " : " + interpretation;
  }