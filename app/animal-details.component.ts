import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'animal-details',
  template: `
  <div class="pt4 fixed card" *ngIf="animalDetailsSelectedAnimal">
    <div class="card-block">
    <div class="row">
      <div class="animal-level">
        <button class="ma2 fr back-button" (click)="backButton()"><i class="fa fa-times" aria-hidden="true"></i>
</button>
        <h4 class="tc">{{animalDetailsSelectedAnimal.name}}</h4>
        <h5 class="tc">{{animalDetailsSelectedAnimal.species}}</h5>
        <h5 class="tc">{{animalDetailsSelectedAnimal.age}}</h5>
        <h5 class="tc">{{animalDetailsSelectedAnimal.diet}}</h5>
        <h5 class="tc">{{animalDetailsSelectedAnimal.location}}</h5>
        <h5 class="tc">{{animalDetailsSelectedAnimal.caretakers}}</h5>
        <h5 class="tc">{{animalDetailsSelectedAnimal.sex}}</h5>
        <h5 class="tc">{{animalDetailsSelectedAnimal.likes}}</h5>
        <h5 class="tc">{{animalDetailsSelectedAnimal.dislikes}}</h5>
      </div>
    </div>
  </div>
  </div>
  `
})

export class AnimalDetailsComponent {

  @Input() animalDetailsSelectedAnimal: Animal;
  @Output() moneyAnimalSender = new EventEmitter();
  @Output() backAnimalSender = new EventEmitter();


  backButton() {
    this.animalDetailsSelectedAnimal = null;
  }


}
