import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'new-animal',
  template: `

    <div *ngIf="addNewButtonInput">
      <div class="card">
      <div class="card-form pa3">
      <h1>New Animal</h1>
        <label>Enter Animal Species</label>
        <input #newSpecies align="right">
        <br>
        <label>Enter Animal Name</label>
        <input #newName align="right">
        <br>
        <label>Enter Age</label>
        <input #newAge align="right">
        <br>
        <label>Enter Diet</label>
        <input #newDiet align="right">
        <br>
        <label>Enter Location</label>
        <input #newLocation align="right">
        <br>
        <label>Enter Caretakers</label>
        <input #newCartakers align="right">
        <br>
        <label>Enter Sex</label>
        <input #newSex align="right">
        <br>
        <label>Enter Likes</label>
        <input #newLikes align="right">
        <br>
        <label>Enter Dislikes</label>
        <input #newDislikes align="right">
        <br>
        <button class="btn btn-default" (click)="submitForm( newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCartakers.value, newSex.value, newLikes.value, newDislikes.value);">Add New Animal</button>
        <button class="btn btn-default" (click)="cancelButton()">Cancel</button>
    </div>
    </div>
  </div>
  `
})

export class NewAnimalComponent {
  @Input() addNewButtonInput: Animal;
  @Output() newAnimalSender = new EventEmitter();

  submitForm(newSpecies: string, newName: string, newAge: number, newDiet: string, newLocation: string, newCartakers: number, newSex: string, newLikes: string, newDislikes: string) {
    var newAnimalToAdd: Animal = new Animal(newSpecies, newName, newAge, newDiet, newLocation, newCartakers, newSex, newLikes, newDislikes);
    this.newAnimalSender.emit(newAnimalToAdd);

  }

  cancelButton() {
    this.newAnimalSender.emit(null);
  }


  }
