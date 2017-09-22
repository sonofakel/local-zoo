import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div *ngIf="childSelectedAnimal">
    <div class="card">
      <div class="card-form pa3 edit-card-input">
      <h1>Edit {{childSelectedAnimal.name}}</h1>
      <label>Enter Animal Name:</label>
      <input [(ngModel)]="childSelectedAnimal.name">

      <label>Enter Animal Species:</label>
      <input [(ngModel)]="childSelectedAnimal.species">

      <label>Enter Animal Age:</label>
      <input [(ngModel)]="childSelectedAnimal.age">

      <label>Enter Animal Diet:</label>
      <input [(ngModel)]="childSelectedAnimal.diet">

      <label>Enter Animal Location:</label>
      <input [(ngModel)]="childSelectedAnimal.location">

      <label>Enter Animal Caretaker:</label>
      <input [(ngModel)]="childSelectedAnimal.caretakers">

      <label>Enter Animal Sex:</label>
      <input [(ngModel)]="childSelectedAnimal.sex">

      <label>Enter Animal Likes:</label>
      <input [(ngModel)]="childSelectedAnimal.likes">

      <label>Enter Animal Dislikes:</label>
      <input [(ngModel)]="childSelectedAnimal.dislikes">

      <button class="btn btn-default"  (click)="doneButtonClicked()">Done</button>
      </div>
    </div>
    </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickSender.emit();
  }

}
