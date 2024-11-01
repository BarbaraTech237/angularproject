import { Injectable, Host, SkipSelf, signal,Injector , effect } from '@angular/core';
// import { HEROES } from './mock-heroes';
 
@Injectable({
    providedIn: 'root'
})
// export class HeroService {
//   name = 'telephone';
//   constructor() { }
//   getHeroes() {
//     // return HEROES;
//   }

// }

export class AnimalService {
    emoji = '🐶🐳';

    readonly count = signal(0);
    constructor(private injector: Injector) { }
    initializeLogging(): void {
        effect(() => {
            console.log(`The count is: ${this.count()}`);
        }, { injector: this.injector });
    }

}
