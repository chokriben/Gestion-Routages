import { Component } from '@angular/core';
import { Produit } from '../model/protuit';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent {
  produits: Array<Produit> = [
    {id:1,code:'x12',designation:"Panier plastique",prix:20},
    {id:2,code:'y4',designation:"table en bois",prix:100},
    {id:3,code:'y10',designation:"salon en cuir",prix:3000}
    ];
    produitSelectionne: any = null;


    afficherFicheProduit(id: number | undefined) {
      if (id !== undefined) {
        this.produitSelectionne = this.produits.find(p => p.id === id);
      } else {
        console.log("L'ID du produit est indéfini.");
      }
    }

  validerModification() {
    if (this.produitSelectionne) { // Vérification que produitSelectionne est défini
      // Implémentez la logique pour valider les modifications du produit
      console.log('Produit modifié :', this.produitSelectionne);
      // Vous pouvez également mettre à jour les détails du produit dans la liste des produits si nécessaire
      const index = this.produits.findIndex(p => p.id === this.produitSelectionne.id);
      if (index !== -1) {
        this.produits[index] = this.produitSelectionne;
      }
      this.produitSelectionne = null; // Réinitialisez produitSelectionne après validation
    } else {
      console.log('Aucun produit sélectionné pour modification.');
    }
  }
    /* editerProduit(id: number | undefined) {
      if (id !== undefined) {
        // Recherche du produit dans la liste des produits par son ID
        const produitAEditer = this.produits.find(p => p.id === id);
        if (produitAEditer) {
          // Implémentez ici la logique pour ouvrir un formulaire d'édition
          console.log('Editer produit avec ID :', id);
        } else {
          console.log('Produit non trouvé avec ID :', id);
        }
      } else {
        console.log('ID du produit non défini.');
      }
    } */
    supprimerProduit(id: number | undefined) {
      // Vérifier si l'id est défini
      if (id !== undefined) {
        // Trouver l'index du produit à supprimer
        const index = this.produits.findIndex(p => p.id === id);
        // Supprimer le produit du tableau
        if (index !== -1) {
          this.produits.splice(index, 1);
        }
      }
    }
}
