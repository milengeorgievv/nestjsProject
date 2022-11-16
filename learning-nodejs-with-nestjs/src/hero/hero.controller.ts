import { Controller, Get, Param, Query } from '@nestjs/common';
import { HeroService } from './hero.service';
import { Hero } from './hero.model';

@Controller('hero')
export class HeroController {
    constructor(private heroServices:HeroService){}

    @Get() 
    getHero(){
        return this.heroServices.getAllHeroes();
    }

    @Get(':universe') 
    getHeroesByUniverse(@Param('universe') universe: string) : Hero[] {
        return this.heroServices.getHeroesByUniverse(universe.toLowerCase());
    }
}
