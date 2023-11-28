export interface Country {
    name: {
        common: string;
        official: string;
    };
    capital: string;
    population: string;
    flags: {
        svg: string;
        png: string;
    };
    region: string;
    languages: [];
    currencies: [];
    timezones: string;
    borders: [];
    cca3: string;
}
