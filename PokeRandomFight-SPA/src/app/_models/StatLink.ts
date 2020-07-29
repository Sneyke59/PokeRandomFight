export interface StatLink {
    stat: {
        name: string;
        url: string;
    };
    effort: number;
    baseStat: number;
    iv: number;
    valueWithIv: number;
}