import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../_models/Pokemon';
import { map, repeat, retry } from 'rxjs/operators';
import * as data from 'src/assets/types.json';
import * as shapes from 'src/assets/shape.json';
import { TypePicture } from '../_models/TypePicture';
import { Specy } from '../_models/Specy';
import { Stat } from '../_models/Stat';
import { ShapeLink } from '../_models/ShapeLink';
import { Shape } from '../_models/Shape';
import { Nature } from '../_models/Nature';
import { StatLink } from '../_models/StatLink';
import { PokemonType } from '../_models/Type';
import Vibrant from 'node-vibrant';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl = 'http://localhost:5000/api/PokeRandom/';

  typePictures: TypePicture[] = (data as any).default;
  shapesPictures: ShapeLink[] = (shapes as any).default;

  constructor(private http: HttpClient) { }

  getPokemon(id: number, nature: Nature) {
    return this.http.get<Pokemon>(this.baseUrl + id)
      .pipe(
        map(resp => {
          for (const type of resp.types) {
            const t = this.typePictures.find(x => x.name === type.type.name);
            if (t !== undefined) {
              type.img = t.url;
              type.imgBg = t.backgroundUrl;
            }
          }

          resp.nature = nature;

          resp.level = Math.floor(Math.random() * Math.floor(99)) + 1;

          for (const stat of resp.stats) {
            stat.iv = Math.floor(Math.random() * Math.floor(31));

            if (stat.stat.name === 'hp') {
              const hp = Math.floor(((((2 * stat.baseStat) + stat.iv) * resp.level) / 100) + resp.level + 10);

              stat.valueWithIv = hp;
            }
            else {
              stat.valueWithIv = this.calculStat(stat, resp.nature, resp.level);
            }
          }

          return resp;
        })
      );
  }

  getSpecyDetails(id: number) {
    return this.http.get<Specy>(this.baseUrl + 'specy/' + id)
      .pipe(
        map(resp => {
          resp.shape.imgUrl = this.shapesPictures.find(x => x.name === resp.shape.name).url;

          return resp;
        })
      );
  }

  getStatsDatas() {
    return this.http.get<Stat[]>(this.baseUrl + 'stats');
  }

  getShapesDatas() {
    return this.http.get<Shape[]>(this.baseUrl + 'shapes');
  }

  getNaturesDatas() {
    return this.http.get<Nature[]>(this.baseUrl + 'natures');
  }

  getTypesDatas() {
    return this.http.get<PokemonType[]>(this.baseUrl + 'types');
  }


  calculStat(stat: StatLink, nature: Nature, level: number) {
    let fluct = 1;

    if (nature.decreasedStat != null && nature.decreasedStat !== undefined) {
      if (nature.decreasedStat.name === stat.stat.name) {
        fluct = 0.9;
      }
    }

    if (nature.increasedStat != null && nature.increasedStat !== undefined) {
      if (nature.increasedStat.name === stat.stat.name) {
        fluct = 1.1;
      }
    }


    return Math.floor((((((2 * stat.baseStat) + stat.iv) * level) + 5) / 100) * fluct);
  }

  loadHisPalette(typeIndex: string) {
    const type = this.typePictures.find(x => x.name === typeIndex);

    if (type === null || type === undefined) {
      Promise.reject('Type doesnt exist !');
    }

    return Vibrant.from(type.url).getPalette();
  }
}
