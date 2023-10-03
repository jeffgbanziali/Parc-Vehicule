import {
  acheterVehicule,
  afficherVehicule,
  ajouterVehicule,
  getVehiculeNonVendu,
  isVehiculeVenduParVendeur,
} from "./controller/vehiculeController.js";
import {
  ajouterVendeurProfessionnel,
  ajouterVendeurParticulier,
  getVendeurs,
  ajouterVendeur,
  afficherVendeur,
} from "./controller/vendeurController.js";

import { Vehicule } from "./class/vehicule.js";
import { Vendeur } from "./class/vendeur.js";

ajouterVehicule(
  "Honda",
  "Accord",
  "2023",
  "Noir",
  "8000",
  "Neuf",
  "7L/100km",
  "Climatisation, Caméra de recul",
  "Essence",
  "4",
  "28000",
  "Bruxelles"
);

ajouterVehicule(
  "Ford",
  "Fusion",
  "2022",
  "Blanc",
  "12000",
  "Occasion",
  "9L/100km",
  "Climatisation, Sièges chauffants",
  "Essence",
  "4",
  "20000",
  "Nouvelle-Acquitaine"
);

ajouterVehicule(
  "Chevrolet",
  "Malibu",
  "2021",
  "Rouge",
  "15000",
  "Occasion",
  "10L/100km",
  "Climatisation, Toit ouvrant",
  "Essence",
  "4",
  "18000",
  "Ile-de-France"
);

ajouterVendeur(
  "Particulier",
  "",
  "John",
  "Dolliton",
  "Paris",
  "Française",
  "0123456789"
);

ajouterVehicule(
  "Toyota",
  "Camry",
  "2022",
  "Bleu",
  "5000",
  "Neuf",
  "8L/100km",
  "Climatisation, GPS",
  "Essence",
  "4",
  "25000",
  "Val de Marne"
);

ajouterVendeurProfessionnel(
  "AutoPro",
  "Ronald",
  "Denis",
  "Paris",
  "Française",
  "0123456789"
);

ajouterVendeurParticulier("Jean", "Dupont", "Paris", "Française", "0123456789");

document.addEventListener("DOMContentLoaded", function () {
  const vehiculeSection = document.querySelector("#vehiculeSection");
  const vendeurSection = document.querySelector("#vendeurSection");

  if (vehiculeSection) {
    afficherVehicule(vehiculeSection);
  } else {
    console.error("Vehicule section not found");
  }

  if (vendeurSection) {
    vendeurSection.setAttribute("class", "structure2");
    afficherVendeur(vendeurSection);
  } else {
    console.error("Vendeur section not found");
  }
});

console.log("*************************************");

// Obtenir la liste des vendeurs
const listeVendeurs = getVendeurs();
console.log(listeVendeurs);

console.log("*************************************");
// Obtenir la liste des véhicules non vendus
const listeVehiculesNonVendus = getVehiculeNonVendu();
console.log("Véhicules non vendus :", listeVehiculesNonVendus);

console.log("*************************************");

// Obtenir la nouvelle liste des véhicules non vendus
const nouvelleListeVehiculesNonVendus = getVehiculeNonVendu();
console.log(
  "Nouvelle liste des véhicules non vendus :",
  nouvelleListeVehiculesNonVendus
);
console.log("*************************************");
const premierVehiculeNonVendu = getVehiculeNonVendu()[0];
const vendeur = Vendeur.listeVendeur[0];
acheterVehicule(premierVehiculeNonVendu.idVehicule, vendeur);

console.log("*************************************");
console.log(Vehicule.listeVehicule);

console.log("*************************************");

// Vérifier si le véhicule est vendu par le vendeur
const vendeurDuVehicule = isVehiculeVenduParVendeur(
  premierVehiculeNonVendu.idVehicule,
  vendeur
);

if (vendeurDuVehicule) {
  console.log("Le véhicule est vendu par le vendeur :", vendeurDuVehicule);
} else {
  console.log("Le véhicule n'est pas vendu par le vendeur.");
}

const vehiculeVendu = isVehiculeVenduParVendeur(
  premierVehiculeNonVendu.idVehicule,
  vendeur
);

if (vehiculeVendu) {
  console.log("Le véhicule vendu :", vehiculeVendu);
} else {
  console.log("Le véhicule n'est pas vendu par le vendeur.");
}

console.log("*************************************");
