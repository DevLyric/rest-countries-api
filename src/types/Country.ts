export interface Country {
    name: {
        common: string;
        official: string;
    };
    capital: string;
    flags: {
        svg: string;
    };
    region: string;
    languages: [];
    currencies: [];
    timezones: string;
    borders: [];
}
