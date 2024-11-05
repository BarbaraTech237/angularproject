import { Component, Input, input, SkipSelf } from '@angular/core';
import { BaseButtonComponent } from './pipe.component.js';
import { LeafService } from './heroes/hero.service.js';
import { AnimalService } from './heroes/animal.service.js';
 import { FavoriteColorComponent } from './forrm.component.js';
import { PopupComponent } from './customElement.component.js';
import { HighlightDirective } from './highlight.directive.js';
import { ReactiveFormsModule } from '@angular/forms'; 
import { CustomCardHeaderComponent } from './custom.component.js';

@Component({
    selector: 'app-test',
    standalone: true,
    // templateUrl: './app.component.html',
    imports: [BaseButtonComponent, FavoriteColorComponent, PopupComponent, HighlightDirective, ReactiveFormsModule, CustomCardHeaderComponent],
    providers: [{ provide: LeafService, useValue: { emoji: '🍁' } }],
    viewProviders: [{ provide: AnimalService, useValue: { emoji: '🐶' } }],

    template: ` 
    <div style="padding-top: 10px">
        For the beginning you will Angular.js
        <button>
        Start</button> <br>
        {{widthPx}}
 
        <button baseButton>
            Next  
        </button>

        <p>Emoji from FlowerService: {{animal.emoji}}</p>
        SS <app-reactive-favorite-color/>
    </div>
    @defer (on timer(10000ms)) {
        <app-reactive-favorite-color />
        } @placeholder {
        <div>Large component placeholder</div>
        }@loading {
        Loading...
      }
        <app-custom-card-action>Save</app-custom-card-action>
    <app-custom-card-action>Cancel</app-custom-card-action>
    <app-my-popup message="Use Angular!"></app-my-popup>

    <p appHighlight>Highlight me!</p>

 <p class="data-view" >The data is: {{data}}</p>
 <ng-container *select let data from source>
  <p class="data-view">The data is: {{data}}</p>

</ng-container>
    `,
    styles: ` div { color: green; } `,

 })
 
export class TestComponent {
    @Input({ transform: appendPx }) widthPx!: string ;

    // counterObservable = interval(1000)
    // counter = toSignal(this.counterObservable, { initialValue: 0 });
    // nameChange$ = new Observable<string>(/* ... */);
    // nameChange = outputFromObservable(this.nameChange$);
    data = 123;
    firstName = input<string>();         // InputSignal<string|undefined>
    age = input(0);
    // InputSignal<number>
    // required
    // lastName = input.required<string>(); 

    // constructor(  @SkipSelf()  public leaf: LeafService) { }
    constructor(@SkipSelf() public animal: AnimalService) { }

 
    // @ContentChild(FavoriteColorComponent) toggle!: FavoriteColorComponent;
    // ngAfterContentInit() {
    //     console.log(this.toggle.text);
    // }

}

function appendPx(value: number) {
    return `${value}px`;
}
