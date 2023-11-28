export interface Country {
    flags: {
        svg: string;
        png: string;
    };
    name: {
        common: string;
        official: string;
        nativeName: Record<string, { official: string }>;
    };
    cca3: string;
    population: string;
    region: string;
    capital: string;
    subregion: string;
    tld: string;
    currencies: Record<string, { name: string }>;
    languages: Record<string, string>;
    borders: [];
}
