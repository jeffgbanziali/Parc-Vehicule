export class Vendeur {
  static listeVendeur = [];
  
  constructor(
    typeDeVendeur = "",
    nomEntreprise = "",
    nom = "",
    prenom = "",
    localisation = "",
    nationnalité = "",
    contact = ""
  ) {
    this.typeDeVendeur = typeDeVendeur;
    this.nomEntreprise = nomEntreprise;
    this.nom = nom;
    this.prenom = prenom;
    this.localisation = localisation;
    this.nationnalité = nationnalité;
    this.contact = contact;
    this.idVendeur = Vendeur.listeVendeur.length + 1;
  }
}
