import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../_models/Pokemon';
import Vibrant from 'node-vibrant';
import { Palette } from 'node-vibrant/lib/color';
import { Specy } from '../_models/Specy';
import { Stats } from 'fs';
import { Stat } from '../_models/Stat';
import { Shape } from '../_models/Shape';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon: Pokemon;
  @Input() palette: Palette;
  @Input() specy: Specy;
  @Input() statsDatas: Stat[];
  @Input() shapesDatas: Shape[];

  @Input() pokemonLoading: boolean;
  @Input() specyLoading: boolean;
  @Input() shapesLoading: boolean;

  constructor() { }

  ngOnInit() {
  }

  getGenera() {
    for (const genera of this.specy.genera) {
      if (genera.language.name === 'fr') {
        return genera.genus;
      }
    }
  }

  getFlavor() {
    const flavors: string[] = [];

    for (const flavor of this.specy.flavorTextEntries) {
      if (flavor.language.name === 'fr') {
        flavors.push(flavor.flavorText);
      }
    }

    return flavors[flavors.length - 1];
  }

  getStat(index: number) {
    return this.statsDatas[index].names.find(x => x.language.name === 'fr').name;
  }

  getShapeName() {
    return this.shapesDatas.find(x => x.name === this.specy.shape.name).names.find(x => x.language.name === 'fr').name;
  }

  getNameLang() {
    return this.specy.names.find(x => x.language.name === 'fr').name;
  }
}
