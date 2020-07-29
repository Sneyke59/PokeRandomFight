import { NameUrl } from './NameUrl';
import { Palette } from 'node-vibrant/lib/color';

export interface PokemonType {
    id: number;
    name: string;
    damageRelations: {
        noDamageTo: NameUrl[],
        halfDamageTo: NameUrl[],
        doubleDamageTo: NameUrl[],
        noDamageFrom: NameUrl[],
        halfDamageFrom: NameUrl[],
        doubleDamageFrom: NameUrl[]
    };
    gameIndices: {
        gameIndex: number,
        generation: NameUrl
    }[];
    generation: NameUrl;
    moveDamageClass: NameUrl;
    names:
    {
        name: string,
        language: NameUrl
    }[];
    pokemon: {
        slot: number,
        pokemon: {
            name: string,
            url: string

        }[],
    };
    moves: NameUrl[];
    palette: Palette;
}
