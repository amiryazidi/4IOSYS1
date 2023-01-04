import { Component, OnInit } from '@angular/core';
import { OffresEmplois } from '../model/offresemplois';


@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent implements OnInit {
  offresemplois !:OffresEmplois[];
  nombre!: number;
  searchtext!: string;
  constructor() { }

  ngOnInit(): void {
    this.offresemplois =[
      {reference:'001',titre:'offresemplois',entreprise:'Esprit', etat:true},
      {reference:'002',titre:'offresemplois1',entreprise:'Adiddas', etat:false}]
  }
  bilan(): void {
    this.nombre=0;
    for (let i = 0; i < this.offresemplois.length;i++)
    {
if (this.offresemplois[i].etat==true){
this.nombre++;
}
    }
  }
  search(): void {
    this.offresemplois=this.offresemplois.filter((offre)=>offre.entreprise==this.searchtext)
  }
  
}
