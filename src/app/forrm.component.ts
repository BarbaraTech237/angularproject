import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
    selector: 'app-reactive-favorite-color',
    standalone: true,
    imports: [ReactiveFormsModule],
    template: `
      Luck
    Favorite Color: <input type="text"  >
    <label for="name">Name: </label>
<input id="name" type="text" [formControl]="name">
  `,
})
export class FavoriteColorComponent {
    // favoriteColorControl = new FormControl('');
    text: string = "Me i only have Jesus, if you remove him i will be empty";
    name = new FormControl('');
}
