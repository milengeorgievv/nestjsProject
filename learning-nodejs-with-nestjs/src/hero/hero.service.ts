import { Injectable } from '@nestjs/common';
import { Hero } from './hero.model';

@Injectable()
export class HeroService {
 marvelHeroes: Hero[] = [
  {name:'Spiderman', powers: ['web'], universe:'Marvel'},
  {name:'Black Panther', powers: ['strength'], universe:'Marvel'},
  {name:'Thor', powers: ['thunder'], universe:'Marvel'}
 ];
 dcHeroes: Hero[] = [
  {name:'Batman', powers: ['billionaire'], universe:'DC'},
  {name:'Superman', powers: ['strength'], universe:'DC'}
 ];

 getAllHeroes(): Hero[] {
  const heroes = [...this.dcHeroes,...this.marvelHeroes];
  //const heroes = [];
  //for(const dcHero of this.dcHeroes) {
    //heroes.push(dcHero);
  //}
  //for(const marvelHero of this.marvelHeroes) {
    //heroes.push(marvelHero);
  //}
  return heroes;
 }

 getHeroesByUniverse(universe:string): Hero[] {
  const filteredHeroes = [...this.dcHeroes, ...this.marvelHeroes].filter((hero) => hero.universe.toLowerCase() == universe);
  //const filteredHeroes = [];
  // for(const hero of heroes) {
  //   if(hero.universe === universe) {
  //     filteredHeroes.push;
  //   }
  // }
  return filteredHeroes;
 }
}

