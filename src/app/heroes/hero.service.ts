import { Injectable } from '@angular/core';
// import { HEROES } from './mock-heroes';
import { Logger } from '../logger.service';

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

export class LeafService {
  emoji = '🌿';
  emojis = '🐳';
}
