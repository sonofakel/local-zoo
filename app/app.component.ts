import { Component } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Local Zoo</h1>

    <div class="row">
    <div class="col-md-6">

    <div class="card pa2 grow f3-ns no-underline bg-dark-green white-90">
    <button class="add-button tc"(click)="addNewButton()"><i class="fa fa-plus tc fa-lg "></i></button>
    </div>

    <new-animal [addNewButtonInput]="addNewButtonClicked" (newAnimalSender)="addAnimal($event)"></new-animal>

    <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickSender)="finishedEditing()"></edit-animal>

    <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)" (detailsClickSender)="detailsAnimal($event)" (deleteClickSender)="deleteAnimal($event)"></animal-list>
    </div>
    <div class="col-md-6 details">
    <animal-details [animalDetailsSelectedAnimal]="selectedDetailsAnimal" (backAnimalSender)="finishedDetailing()"></animal-details>
    </div>

  </div>
  `
})

export class AppComponent {

  selectedAnimal = null;
  selectedDetailsAnimal = null;
  addNewButtonClicked = null;

  masterAnimalList: Animal[] = [
    new Animal('Artic Fox', 'Moon', 2, 'Carnivore','Northern Trail', 5, 'Female','Cool shade', 'Loud noises'),
    new Animal('Ocelot', 'Prince', 4, 'Carnivore','Tropical Rain Forest Building', 6, 'Male','Laying in the sunshine', 'Toys that are not rope-based'),
    new Animal('Northwest Black Tailed Deer', 'Tinkerbell', 4, 'Carnivore','Northern Trail', 2, 'Female','Delicate roots and leaves', 'Loud noises'),

  ];

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    if(newAnimalFromChild) {
      this.masterAnimalList.push(newAnimalFromChild);
    }
    this.addNewButtonClicked = null;
  }

  addNewButton() {
    this.addNewButtonClicked = true;
  }

  detailsAnimal(clickedAnimal) {
    this.selectedDetailsAnimal = clickedAnimal;
  }

  finishedDetailing() {
    this.selectedDetailsAnimal = null;
  }

  deleteAnimal(selectedAnimal) {
    let itemToDelete = this.masterAnimalList.findIndex(function (animal) {return selectedAnimal.name === animal.name});
    this.masterAnimalList.splice(itemToDelete, 1);
  }

}
