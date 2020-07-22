import { NameUrl } from './NameUrl';

export interface Stat {
    id: number;
    name: string;
    gameIndex: string;
    isBattleOnly: false;
    affectingMoves: {
        increase: {
            change: number;
            move: NameUrl;
        }[],
        decrease: {
            change: number;
            move: NameUrl;
        }[]
    };

    affectingNatures: {
        increase: NameUrl[];
        decrease: NameUrl[];
    };

    characteristics: {
        url: string;
    }[];

    moveDamageClass: NameUrl;

    names: {
        name: string;
        language: NameUrl;
    }[];

}
