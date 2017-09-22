import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `

    <div class="filters">
      <button class="btn btn-default grow" (click)="filterByAge('young')">Young Animals</button>
      <button class="btn btn-default grow" (click)="filterByAge('all')">All Animals</button>
    </div>

    <div class="card" *ngFor="let currentAnimal of childAnimalList | age:filterByAgeOption">
      <div class="card-block">
        <button class="edit-button"(click)="editButtonHasBeenClicked(currentAnimal)"><i class="fa fa-pencil fa-lg" aria-hidden="true"></i></button>
        <button class="details-button" (click)="detailsButtonHasBeenClicked(currentAnimal)"><i class="fa fa-signal fa-lg" aria-hidden="true"></i></button>
        <button class="delete-button" (click)="deleteButtonHasBeenClicked(currentAnimal)"><i class="fa fa-times" aria-hidden="true"></i></button>
        <h1 class="card-title">{{currentAnimal.name}}</h1>
        <h6 class="card-subtitle mb-2 text-muted">{{currentAnimal.species}}</h6>
        <h5 class="card-text">Age: {{currentAnimal.age}}</h5>
      </div>
    </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  @Output() detailsClickSender = new EventEmitter();
  @Output() deleteClickSender = new EventEmitter();

  filterByAgeOption: string = 'all';

  filterByAge(filterString) {
    this.filterByAgeOption = filterString;
  }

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  detailsButtonHasBeenClicked(animalToDetail: Animal) {
    this.detailsClickSender.emit(animalToDetail);
  }

  deleteButtonHasBeenClicked(animalToDelete: Animal) {
    this.deleteClickSender.emit(animalToDelete);
  }

}
