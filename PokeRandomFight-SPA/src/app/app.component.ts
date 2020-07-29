import { Component, OnInit, Type } from '@angular/core';
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
import { async } from '@angular/core/testing';
import { time } from 'console';
import { LanguageService } from './_services/language.service';
import { PokemonType } from './_models/Type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PokeRandomFight-SPA';

  pokemon: Pokemon = {
    id: 0,
    level: 50,
    name: 'none',
    baseExperience: '120',
    height: 50,
    isDefault: true,
    order: 1,
    weight: 50,
    abilities: {
      isHidden: false,
      slot: 1,
      ability: {
        name: 'none',
        url: 'none'
      }
    },
    forms: {
      name: 'none',
      url: 'none'
    },
    gameIndicies: {
      gameIndex: 0,
      version: {
        name: 'none',
        url: 'none'
      }
    },
    locationAreaEncounters: 'none',
    moves: [{
      move: {
        name: 'none',
        url: 'none'
      },
      versionGroupDetails: [{
        moveLearnMethod: {
          name: 'none',
          url: 'none'
        },
        versionGroup: {
          name: 'none',
          url: 'none'
        },
        levelLearnedAt: 0
      }]
    }],
    sprites: {
      frontDefault: '../assets/thing.png',
      frontShiny: 'none',
      frontFemale: 'none',
      frontShinyFemale: 'none',
      backDefault: 'none',
      backShiny: 'none',
      backFemale: 'none',
      backShinyFemale: 'none'
    },
    species: {
      name: 'none',
      url: 'none'
    },
    stats: [
      {
        stat: {
          name: 'hp',
          url: 'none'
        },
        effort: 1,
        baseStat: 60,
        iv: 0,
        valueWithIv: 60
      },
      {
        stat: {
          name: 'attack',
          url: 'none'
        },
        effort: 1,
        baseStat: 60,
        iv: 0,
        valueWithIv: 60
      },
      {
        stat: {
          name: 'defense',
          url: 'none'
        },
        effort: 1,
        baseStat: 60,
        iv: 0,
        valueWithIv: 60
      },
      {
        stat: {
          name: 'special-attack',
          url: 'none'
        },
        effort: 1,
        baseStat: 60,
        iv: 0,
        valueWithIv: 60
      },
      {
        stat: {
          name: 'special-defense',
          url: 'none'
        },
        effort: 1,
        baseStat: 60,
        iv: 0,
        valueWithIv: 60
      },
      {
        stat: {
          name: 'speed',
          url: 'none'
        },
        effort: 1,
        baseStat: 60,
        iv: 0,
        valueWithIv: 60
      }
    ],
    types: [
      {
        slot: 0,
        type: {
          name: 'normal',
          url: 'none'
        },
        img: 'https://www.pokepedia.fr/images/0/02/Miniature_Type_Normal_LGPE.png',
        imgBg: ''
      }
    ],
    nature: {
      id: 0,
      name: 'hardy',
      decreasedStat: null,
      increasedStat: null,
      hatesFlavor: null,
      likesFlavor: null,
      moveBattleStylePreferences: [
        {
          lowHpPreference: 0,
          highHpPreference: 0,
          moveBattleStyle: {
            name: 'none',
            url: 'none'
          }
        }
      ],
      names: [
        {
          name: 'Hardi',
          language: {
            name: 'fr',
            url: 'none'
          }
        },
        {
          name: 'Hardy',
          language: {
            name: 'en',
            url: 'none'
          }
        }
      ],
      pokeathlonStatChanges: [
        {
          maxChange: 0,
          pokeathlonStat: {
            name: 'none',
            url: 'none'
          }
        }
      ]
    }
  };

  pokemonLoading = false;
  specyLoading = false;
  shapesLoading = false;
  naturesLoading = false;
  palette: Palette;

  specy: Specy = {
    base_happiness: 0,
    captureRate: 0,
    color: {
      name: 'none',
      url: 'none'
    },
    eggGroups: [
      {
        name: 'none',
        url: 'none'
      }
    ],
    evolutionChain: {
      url: 'none'
    },
    evolvesFromSpecies: {
      name: 'none',
      url: 'none'
    },
    flavorTextEntries: [
      {
        flavorText: 'Si on l’attaque, il projette un nuage de coton. L’ennemi le confond avec lui, ce qui permet à Doudouvet de s’enfuir.',
        language: {
          name: 'fr',
          url: 'none'
        },
        version: {
          name: 'none',
          url: 'none'
        }

      },
      {
        flavorText: 'When attacked, it escapes by shooting cotton from its body. The cotton serves as a decoy to distract the attacker.',
        language: {
          name: 'en',
          url: 'none'
        },
        version: {
          name: 'none',
          url: 'none'
        }
      }
    ],
    formsSwitchable: false,
    genderRate: 4,
    genera: [
      {
        genus: 'Pokémon Boule Coton',
        language: {
          name: 'fr',
          url: 'none'
        }
      },
      {
        genus: 'Cotton Puff Pokémon',
        language: {
          name: 'en',
          url: 'none'
        }
      }
    ],
    generation: {
      name: 'none',
      url: 'none'
    },
    growthRate: {
      name: 'none',
      url: 'none'
    },
    habitat: null,
    hasGenderDifferences: false,
    hatchCounter: 20,
    id: 546,
    isBaby: false,
    name: 'cottonee',
    names: [
      {
        name: 'Doudouvet',
        language: {
          name: 'fr',
          url: 'none'
        }
      },
      {
        name: 'Cottonee',
        language: {
          name: 'fr',
          url: 'none'
        }
      }
    ],
    order: 547,
    palParkEncounters: [],
    pokedexNumbers: [{
      entryNumber: 547,
      pokedex: {
        name: 'none',
        url: 'none'
      }
    }],
    shape: {
      name: 'ball',
      url: 'none',
      imgUrl: 'https://cdn.bulbagarden.net/upload/1/17/Body01.png'
    },
    varieties: []
  };

  statsDatas: Stat[];
  shapesDatas: Shape[];
  naturesDatas: Nature[];
  typesData: PokemonType[];

  constructor(private pokemonServ: PokemonService, private langServ: LanguageService) { }

  ngOnInit(): void {

    this.loadAll()
      .then(() => {
        this.getRandom();
      });
  }

  loadAll = async () => {
    this.shapesLoading = true;
    this.naturesLoading = true;
    this.pokemonLoading = true;

    const promStat = await this.getStatsData();
    this.statsDatas = promStat;
    localStorage.setItem('stats', JSON.stringify(this.statsDatas));

    const promShapes = await this.getShapesData();
    this.shapesLoading = false;
    this.shapesDatas = promShapes;
    localStorage.setItem('shapes', JSON.stringify(this.shapesDatas));

    const natureProm = await this.getNaturesData();
    this.naturesLoading = false;
    this.naturesDatas = natureProm;
    localStorage.setItem('natures', JSON.stringify(this.naturesDatas));

    const typeProm = await this.getTypesData();
    this.typesData = typeProm;

    if (localStorage.getItem('types') === null || localStorage.getItem('types') === undefined) {
      for (const type of this.typesData) {
        const paletteProm = await this.pokemonServ.loadHisPalette(type.name);
        console.log(paletteProm);
        type.palette = paletteProm;
      }
    }

    localStorage.setItem('types', JSON.stringify(this.typesData));


  }

  getNaturesData() {
    this.naturesLoading = true;

    const natures: Nature[] = JSON.parse(localStorage.getItem('natures'));

    if (natures != null) {
      return Promise.resolve(natures);
    }

    return this.pokemonServ.getNaturesDatas().toPromise();
  }

  getShapesData() {
    this.shapesLoading = true;

    const shapes: Shape[] = JSON.parse(localStorage.getItem('shapes'));

    if (shapes != null) {
      return Promise.resolve(shapes);
    }

    return this.pokemonServ.getShapesDatas().toPromise();
  }

  getStatsData() {

    const stats: Stat[] = JSON.parse(localStorage.getItem('stats'));

    if (stats != null) {
      return Promise.resolve(stats);
    }

    return this.pokemonServ.getStatsDatas().toPromise();
  }

  getTypesData() {
    const types: PokemonType[] = JSON.parse(localStorage.getItem('types'));

    if (types != null) {
      return Promise.resolve(types);
    }

    return this.pokemonServ.getTypesDatas().toPromise();
  }

  getRandom() {
    this.pokemonLoading = true;
    this.specyLoading = true;
    this.pokemonServ.getPokemon(this.getRandomInt(807), this.getRandomNature()).subscribe(resp => {
      this.pokemon = resp;
      this.pokemonLoading = false;

      Vibrant.from(this.pokemon.sprites.frontDefault).getPalette((err, palette) => {
        this.palette = palette;
      });

      this.pokemonServ.getSpecyDetails(this.pokemon.id).subscribe(response => {
        this.specy = response;
        this.specyLoading = false;
      });
    });
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  getRandomNature() {
    const rand = Math.floor(Math.random() * Math.floor(23));

    return this.naturesDatas[rand];
  }

  onToggle() {
    this.langServ.changeLang();
  }
}
