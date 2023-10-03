import { Vendeur } from "../class/vendeur.js";
import { Vehicule } from "../class/vehicule.js";

export const ajouterVehicule = (
  marque,
  modele,
  année,
  couleur,
  kilometrage,
  etat,
  consommation,
  options,
  motorisation,
  nombreDePortes,
  prixHT,
  emplacementDuVehicule,
  vendu = false,
  vendeur = null
) => {
  Vehicule.listeVehicule.push(
    new Vehicule(
      marque,
      modele,
      année,
      couleur,
      kilometrage,
      etat,
      consommation,
      options,
      motorisation,
      nombreDePortes,
      prixHT,
      emplacementDuVehicule,
      vendu,
      vendeur
    )
  );
};

export const acheterVehicule = (idVehicule, vendeur) => {
  const vehicule = Vehicule.listeVehicule.find(
    (value) => value.idVehicule === idVehicule
  );

  if (vehicule && !vehicule.vendu) {
    vehicule.vendu = true;
    vehicule.vendeur = vendeur;
  }
};

export const isVehiculeVenduParVendeur = (idVehicule, vendeur) => {
  const vehicule = Vehicule.listeVehicule.find(
    (value) => value.idVehicule === idVehicule
  );

  return vehicule && vehicule.vendu && vehicule.vendeur === vendeur
    ? vehicule
    : null;
};

export const getVehiculeNonVendu = () => {
  return Vehicule.listeVehicule.filter((value) => !value.vendu);
};

export const ajouterUnVendeurVehiculev1 = (indexVehicule, indexVendeur) => {
  Vehicule.listeVehicule[indexVehicule].vendeur =
    Vendeur.listeVendeur[indexVendeur];
};

export const ajouterVendeurVehiculev2 = (idVehicule, idVendeur) => {
  let vehicule = Vehicule.listeVehicule.find((value) => {
    return value.idVehicule === idVehicule;
  });

  let vendeur = Vendeur.listeVendeur.find((value) => {
    return value.idVendeur === idVendeur;
  });

  vehicule.vendeur = vendeur;
};

export const afficherVehicule = (target) => {
  let vehiculeContainer = document.createElement("section")
  vehiculeContainer.setAttribute("class", "structure1");
  Vehicule.listeVehicule.map((value, index) => {
    let carList = document.createElement("article");
    carList.setAttribute("class", "vehicule1");
    let title = document.createElement("h5");
    title.setAttribute("class", "vehiculeTitle");
    title.appendChild(
      document.createTextNode(
        "Une " +
          value.marque +
          " de modèle " +
          value.modele +
          " pour une couleur " +
          value.couleur +
          " il est conçu en " +
          value.année
      )
    );

    let option = document.createElement("h5");
    option.setAttribute("class", "vehiculeOption");
    option.appendChild(
      document.createTextNode(
        "L'options sur le véhicule " +
          value.options +
          " Etat du véhicule " +
          value.etat +
          " Le moteur est " +
          value.motorisation +
          " Le modèle possède " +
          value.nombreDePortes
      )
    );

    let actu = document.createElement("h5");
    actu.setAttribute("class", "vehiculeActu");
    actu.appendChild(
      document.createTextNode(
        "Le véhicule est estimé à " +
          value.prixHT +
          " Il se trouve en " +
          value.emplacementDuVehicule
      )
    );

    carList.appendChild(title);
    carList.appendChild(option);
    carList.appendChild(actu);
    vehiculeContainer.appendChild(carList);
  });

  target.append(vehiculeContainer);
};
