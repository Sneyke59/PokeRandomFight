import { Component, OnInit } from '@angular/core';
import { PokemonService } from './_services/pokemon.service';
import { Pokemon } from './_models/Pokemon';
import Vibrant from 'node-vibrant';
import { Palette } from 'node-vibrant/lib/color';
import { Specy } from './_models/Specy';
import { Stats } from 'fs';
import { Stat } from './_models/Stat';
import { ShapeLink } from './_models/ShapeLink';
import { Shape } from './_models/Shape';
import { Nature } from './_models/Nature';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PokeRandomFight-SPA';
  pokemon: Pokemon;
  pokemonLoading = false;
  specyLoading = false;
  shapesLoading = false;
  naturesLoading = false;
  palette: Palette;
  specy: Specy;
  statsDatas: Stat[];
  shapesDatas: Shape[];
  naturesDatas: Nature[];

  constructor(private pokemonServ: PokemonService) { }

  ngOnInit(): void {
    this.getRandom();

    this.getStatsData();
    this.getShapesData();
    this.getNaturesData();
  }

  getNaturesData() {
    this.naturesLoading = true;

    const natures: Nature[] = JSON.parse(localStorage.getItem('natures'));

    if (natures != null) {
      this.naturesDatas = natures;
      this.naturesLoading = false;

      return;
    }

    this.pokemonServ.getNaturesDatas().subscribe(response => {
      this.naturesDatas = response;
      localStorage.setItem('natures', JSON.stringify(this.naturesDatas));
      this.naturesLoading = false;
    });
  }

  getShapesData() {
    this.shapesLoading = true;

    const shapes: Shape[] = JSON.parse(localStorage.getItem('shapes'));

    if (shapes != null) {
      this.shapesDatas = shapes;
      this.shapesLoading = false;

      return;
    }

    this.pokemonServ.getShapesDatas().subscribe(response => {
      this.shapesDatas = response;
      localStorage.setItem('shapes', JSON.stringify(this.shapesDatas));
      this.shapesLoading = false;
    });
  }

  getStatsData() {

    const stats: Stat[] = JSON.parse(localStorage.getItem('stats'));

    if (stats != null) {
      this.statsDatas = stats;
      return;
    }

    this.pokemonServ.getStatsDatas().subscribe(response => {
      this.statsDatas = response;
      localStorage.setItem('stats', JSON.stringify(this.statsDatas));
    });
  }

  getRandom() {
    this.pokemonLoading = true;
    this.specyLoading = true;
    this.pokemonServ.getPokemon(this.getRandomInt(807)).subscribe(resp => {
      this.pokemon = resp;
      this.pokemonLoading = false;

      console.log(this.pokemon);

      Vibrant.from(this.pokemon.sprites.frontDefault).getPalette((err, palette) => {
        console.log(palette);
        this.palette = palette;
      });

      this.pokemonServ.getSpecyDetails(this.pokemon.id).subscribe(response => {
        this.specy = response;
        console.log(this.specy);
        this.specyLoading = false;
      });
    });
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
