import { useTheme } from "../context/ThemeContext";

interface CountryCardProps {
    flag: string;
    name: string;
    population: string;
    region: string;
    capital: string;
}

const CountryCard = ({ flag, name, population, region, capital }: CountryCardProps) => {
    const themeCtx = useTheme();

    return (
        <div
            className={`w-full md:w-96 shadow-md h-96 rounded-md ${
                themeCtx?.darkMode ? "bg-dark-mode-elements" : "bg-dark-mode-text-&-light-mode-elementes"
            }`}
        >
            <img className="w-full h-40 rounded-tl-md rounded-tr-md" src={flag} alt="" />
            <div className="p-5">
                <h3 className="font-semibold text-xl my-3">{name}</h3>
                <p>
                    <b>Population: </b>
                    {population}
                </p>
                <p>
                    <b>Population: </b>
                    {region}
                </p>
                <p>
                    <b>Population: </b>
                    {capital}
                </p>
            </div>
        </div>
    );
};

export default CountryCard;
