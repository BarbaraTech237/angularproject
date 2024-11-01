import { Component, Input, input, SkipSelf, ViewChildren, QueryList, ContentChild } from '@angular/core';
import { BaseButton } from './pipe.component.js';
import { LeafService } from './heroes/hero.service.js';
import { AnimalService } from './heroes/animal.service.js';
import { CustomCardHeader } from './custom.component.js';
import { FavoriteColorComponent } from './forrm.component.js';
import { PopupComponent } from './customElement.component.js';
import { HighlightDirective } from './highlight.directive.js';
import { ReactiveFormsModule } from '@angular/forms';

 

@Component({
    selector: 'app-test',
    standalone: true,
    // templateUrl: './app.component.html',
    imports: [BaseButton, FavoriteColorComponent, CustomCardHeader, PopupComponent, HighlightDirective, ReactiveFormsModule],
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
    <my-popup message="Use Angular!"></my-popup>

    <p appHighlight>Highlight me!</p>

 <p class="data-view" *select="let data from source">The data is: {{data}}</p>
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

    // @ViewChild(CustomCardHeader) header!: CustomCardHeader;

    // ngAfterViewInit() {
    //      console.log(this.header.text);
    // }

    @ViewChildren(CustomCardHeader) actions!: QueryList<CustomCardHeader> ;
    ngAfterViewInit() {
        this.actions.forEach(action => {
                 console.log(action.text);
         });
    }

    @ContentChild(FavoriteColorComponent) toggle!: FavoriteColorComponent;
    ngAfterContentInit() {
        console.log(this.toggle.text);
    }

}

function appendPx(value: number) {
    return `${value}px`;
}
