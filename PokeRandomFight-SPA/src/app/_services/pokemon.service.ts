import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../_models/Pokemon';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemon(id: number) {
    return this.http.get<Pokemon>('http://localhost:5000/api/PokeRandom/' + id)
      .pipe(
        map(resp => {
          return resp;
        })
      );
  }
}
