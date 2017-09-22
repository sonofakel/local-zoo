import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'animal-details',
  template: `
  <div class="card" *ngIf="animalDetailsSelectedAnimal">
    <div class="card-block ">
        <button class="ma2 fr back-button" (click)="backButton()"><i class="fa fa-times" aria-hidden="true"></i>
</button>
        <h1 class="tc">{{animalDetailsSelectedAnimal.name}}'s Details</h1>
        <h5 class="tc">Species: {{animalDetailsSelectedAnimal.species}}</h5>
        <h5 class="tc">Age: {{animalDetailsSelectedAnimal.age}}</h5>
        <h5 class="tc">Diet: {{animalDetailsSelectedAnimal.diet}}</h5>
        <h5 class="tc">Location: {{animalDetailsSelectedAnimal.location}}</h5>
        <h5 class="tc">Caretakers: {{animalDetailsSelectedAnimal.caretakers}}</h5>
        <h5 class="tc">Sex: {{animalDetailsSelectedAnimal.sex}}</h5>
        <h5 class="tc">Likes: {{animalDetailsSelectedAnimal.likes}}</h5>
        <h5 class="tc">Dislikes: {{animalDetailsSelectedAnimal.dislikes}}</h5>
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
