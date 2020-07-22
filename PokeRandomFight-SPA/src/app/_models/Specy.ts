import { NameUrl } from './NameUrl';

export interface Specy {
    base_happiness: number;
    captureRate: number;
    color: NameUrl;
    eggGroups: NameUrl[];
    evolutionChain: {
        url: string;
    };
    evolvesFromSpecies: NameUrl;
    flavorTextEntries: {
        flavorText: string;
        language: NameUrl;
        version: NameUrl;
    }[];
    formsSwitchable: boolean;
    genderRate: number;
    genera: {
        genus: string;
        language: NameUrl;
    }[];
    generation: NameUrl;
    growthRate: NameUrl;
    habitat: NameUrl;
    hasGenderDifferences: boolean;
    hatchCounter: number;
    id: number;
    isBaby: boolean;
    name: string;
    names: {
        language: NameUrl;
        name: string;
    }[];
    order: number;
    palParkEncounters: {
        area: NameUrl;
        baseScore: number;
        rate: number;
    }[];
    pokedexNumbers: {
        entryNumber: number;
        pokedex: NameUrl;
    }[];
    shape: {
        name: string;
        url: string;
        imgUrl: string;
    };
    varieties: {
        isDefault: boolean;
        pokemon: NameUrl;
    }[];
}
