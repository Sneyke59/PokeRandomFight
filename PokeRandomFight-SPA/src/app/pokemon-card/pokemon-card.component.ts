import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Pokemon } from '../_models/Pokemon';
import Vibrant from 'node-vibrant';
import { Palette, Swatch } from 'node-vibrant/lib/color';
import { Specy } from '../_models/Specy';
import { Stats } from 'fs';
import { Stat } from '../_models/Stat';
import { Shape } from '../_models/Shape';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { LanguageService } from '../_services/language.service';
import { PokemonType } from '../_models/Type';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
  animations: [
    trigger('switching', [
      state('default', style({
        'max-height': 'auto'
      })),
      state('close', style({
        'max-height': '200px',
        height: '200px'
      })),
      transition('* => *', [
        animate('100ms ease')
      ])
    ]),
    trigger('switchStat', [
      state('shown', style({
        opacity: 1
      })), state('hidden', style({
        opacity: 0
      })),
      transition('* => *', [
        animate('200ms ease')
      ])
    ])
  ]
})
export class PokemonCardComponent implements OnInit {
  switchingState = 'default';
  switchStatState = 'shown';

  @Input() pokemon: Pokemon;
  @Input() palette: Palette;
  @Input() specy: Specy;
  @Input() statsDatas: Stat[];
  @Input() shapesDatas: Shape[];
  @Input() typesDatas: PokemonType[];
  @Input() pokemonLoading: boolean;
  @Input() specyLoading: boolean;
  @Input() shapesLoading: boolean;

  paletteTypeOne: Palette;
  paletteTypeTwo: Palette;

  showBaseStat = false;

  @ViewChild('desc', { static: true }) desc: ElementRef;

  getBottomHeight(): string {
    const height: number = +this.desc.nativeElement.offsetHeight;

    return (height + 4) + 'px';
  }


  constructor(private langServ: LanguageService) { }

  ngOnInit() {

  }

  getGenera() {
    for (const genera of this.specy.genera) {
      if (genera.language.name === this.langServ.lang) {
        return genera.genus;
      }
    }
  }

  getFlavor() {
    const flavors: string[] = [];

    for (const flavor of this.specy.flavorTextEntries) {
      if (flavor.language.name === this.langServ.lang) {
        flavors.push(flavor.flavorText);
      }
    }

    return flavors[flavors.length - 1];
  }

  getStat(index: number) {
    return this.statsDatas[index].names.find(x => x.language.name === this.langServ.lang).name;
  }

  getShapeName() {
    return this.shapesDatas.find(x => x.name === this.specy.shape.name).names.find(x => x.language.name === this.langServ.lang).name;
  }

  getNameLang() {
    return this.specy.names.find(x => x.language.name === this.langServ.lang).name;
  }

  getNatureLang() {
    return this.pokemon.nature.names.find(x => x.language.name === this.langServ.lang).name;
  }

  getTypeLang(typeId: string) {
    return this.typesDatas.find(x => x.name === typeId).names.find(x => x.language.name === this.langServ.lang).name;
  }

  getColorForType(typeId: string) {
    const palette = this.typesDatas.find(x => x.name === typeId).palette;

    return `rgb(${palette.Vibrant.rgb[0]}, ${palette.Vibrant.rgb[1]}, ${palette.Vibrant.rgb[2]})`;
  }

  isLoading = () => this.pokemonLoading || this.shapesLoading || this.specyLoading;

  getColorOpacity(color: Swatch) {
    return `rgba(${color.r}, ${color.g}, ${color.b}, 0.8)`;
  }

  switchShownStats() {
    this.switchStatState = 'hidden';

    setTimeout(() => {
      this.switchStatState = 'shown';
      this.showBaseStat = !this.showBaseStat;
    }, 200);

  }
}
