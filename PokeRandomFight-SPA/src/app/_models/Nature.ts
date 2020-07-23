import { NameUrl } from './NameUrl';

export interface Nature {
    id: number;
    name: string;
    decreasedStat: NameUrl;
    increasedStat: NameUrl;
    hatesFlavor: NameUrl;
    likesFlavor: NameUrl;
    pokeathlonStatChanges: {
        maxChange: number;
        pokeathlonStat: NameUrl;
    }[];
    moveBattleStylePreferences:
    {
        lowHpPreference: number;
        highHpPreference: number;
        moveBattleStyle: NameUrl;
    }[];
    names: {
        name: string;
        language: NameUrl;
    }[];
}
