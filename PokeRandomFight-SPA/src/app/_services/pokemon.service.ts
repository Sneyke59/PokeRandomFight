import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../_models/Pokemon';
import { map } from 'rxjs/operators';
import * as data from 'src/assets/types.json';
import * as shapes from 'src/assets/shape.json';
import { TypePicture } from '../_models/TypePicture';
import { Specy } from '../_models/Specy';
import { Stat } from '../_models/Stat';
import { ShapeLink } from '../_models/ShapeLink';
import { Shape } from '../_models/Shape';
import { Nature } from '../_models/Nature';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl = 'http://localhost:5000/api/PokeRandom/';

  typePictures: TypePicture[] = (data as any).default;
  shapesPictures: ShapeLink[] = (shapes as any).default;

  constructor(private http: HttpClient) { }

  getPokemon(id: number) {
    return this.http.get<Pokemon>(this.baseUrl + id)
      .pipe(
        map(resp => {
          for (const type of resp.types) {
            const t = this.typePictures.find(x => x.name === type.type.name);
            if (t !== undefined) {
              type.img = t.url;
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
}
