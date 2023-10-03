import { Vendeur } from "../class/vendeur.js";

export const ajouterVendeur = (
  typeDeVendeur,
  nomEntreprise,
  nom,
  prenom,
  localisation,
  nationnalité,
  contact
) => {
  Vendeur.listeVendeur.push(
    new Vendeur(
      typeDeVendeur,
      nomEntreprise,
      nom,
      prenom,
      localisation,
      nationnalité,
      contact
    )
  );
};

export const ajouterVendeurProfessionnel = (
  nomEntreprise,
  nom,
  prenom,
  localisation,
  nationnalité,
  contact
) => {
  ajouterVendeur(
    "Professionnel",
    nomEntreprise,
    nom,
    prenom,
    localisation,
    nationnalité,
    contact
  );
};

export const ajouterVendeurParticulier = (
  nom,
  prenom,
  localisation,
  nationnalité,
  contact
) => {
  ajouterVendeur(
    "Particulier",
    "",
    nom,
    prenom,
    localisation,
    nationnalité,
    contact
  );
};

export const getVendeurs = () => {
  return Vendeur.listeVendeur;
};

export const afficherVendeur = (target) => {
  let vendeurContainer = document.createElement("section");
  vendeurContainer.setAttribute("class", "structure2");
  Vendeur.listeVendeur.map((value, index) => {
    let vndListe = document.createElement("article");
    vndListe.setAttribute("class", "vendeurListe");
    let name = document.createElement("h5");
    name.setAttribute("class", "name");
    name.appendChild(
      document.createTextNode(
        " Type de venduer : " +
          value.typeDeVendeur +
          " Nom de l'entreprise : " +
          value.nomEntreprise +
          " Nom : " +
          value.nom +
          " Prenom : " +
          value.prenom +
          " Localisation : " +
          value.localisation +
          " Nationalité : " +
          value.nationnalité +
          " Coordonnées : " +
          value.contact
      )
    );

    vndListe.appendChild(name);
    vendeurContainer.appendChild(vndListe);
  });

  target.append(vendeurContainer);
};
