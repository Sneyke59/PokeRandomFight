import { Sprites } from './Sprites';
import { AbilityLink } from './AbilityLink';
import { FormLink } from './FormLink';
import { IndiciesLink } from './IndiciesLink';
import { MoveLink } from './MoveLink';
import { SpecyLink } from './SpecyLink';
import { StatLink } from './StatLink';
import { TypeLink } from './TypeLink';

export interface Pokemon {
    id: number;
    name: string;
    baseExperience: string;
    height: number;
    isDefault: boolean;
    order: number;
    weight: number;
    abilities: AbilityLink;
    forms: FormLink;
    gameIndicies: IndiciesLink;
    locationAreaEncounters: string;
    moves: MoveLink[];
    sprites: Sprites;
    species: SpecyLink;
    stats: StatLink[];
    types: TypeLink[];
}
