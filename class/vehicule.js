export class Vehicule {
  static listeVehicule = [];
  
  constructor(
    marque = "",
    modele = "",
    année = "",
    couleur = "",
    kilometrage = "",
    etat = "",
    consommation = "",
    options = "",
    motorisation = "",
    nombreDePortes = "",
    prixHT = "",
    emplacementDuVehicule = "",
    vendu = 0,
    vendeur = null
  ) {
    this.marque = marque;
    this.modele = modele;
    this.année = année;
    this.couleur = couleur;
    this.kilometrage = kilometrage;
    this.etat = etat;
    this.consommation = consommation;
    this.options = options;
    this.motorisation = motorisation;
    this.nombreDePortes = nombreDePortes;
    this.prixHT = prixHT;
    this.emplacementDuVehicule = emplacementDuVehicule;
    this.vendu = vendu;
    this.vendeur = vendeur;
    this.idVehicule = Vehicule.listeVehicule.length + 1;
  }
}
