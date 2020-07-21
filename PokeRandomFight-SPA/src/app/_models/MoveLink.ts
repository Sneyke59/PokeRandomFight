export interface MoveLink {
    move: {
        name: string;
        url: string;
    };

    versionGroupDetails:
    {
        moveLearnMethod: {
            name: string,
            url: string
        },
        versionGroup: {
            name: string,
            url: string
        },
        levelLearnedAt: number
    }[];
}
