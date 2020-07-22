import { NameUrl } from './NameUrl';

export interface Shape {
    id: string;
    name: string;
    awesomeNames: {
        awesomeName: string;
        language: NameUrl;
    }[];
    names: {
        name: string;
        language: NameUrl;
    }[];
    pokemonSpecies: NameUrl[];
}