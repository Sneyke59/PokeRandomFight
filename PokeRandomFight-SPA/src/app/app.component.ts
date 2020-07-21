import { Component, OnInit } from '@angular/core';
import { PokemonService } from './_services/pokemon.service';
import { Pokemon } from './_models/Pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PokeRandomFight-SPA';
  pokemon: Pokemon;

  constructor(private pokemonServ: PokemonService) { }

  ngOnInit(): void {

  }

  getRandom() {
    this.pokemonServ.getPokemon(this.getRandomInt(500)).subscribe(resp => {
      this.pokemon = resp;
      console.log(this.pokemon);
    });
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
