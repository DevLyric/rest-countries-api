import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { Country } from "../types/Country";

function CountryDetails() {
    const { name } = useParams();
    const themeCtx = useTheme();
    const [items, setItems] = useState<Country[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/alpha/${name}`)
            .then(response => response.json())
            .then(data => {
                setItems(data);
                setLoading(false);
                console.log(data);
            });
    }, [name]);

    return (
        <div className="w-full container mx-auto px-5 sm:px-0">
            <Link to="/">
                {" "}
                <button
                    className={`my-12 w-32 py-2 shadow rounded ${
                        themeCtx?.darkMode ? "bg-dark-mode-elements" : "bg-dark-mode-text-&-light-mode-elementes"
                    }`}
                >
                    Back
                </button>{" "}
            </Link>

            {loading ? (
                <p className="animate-bounce">Loading...</p>
            ) : (
                items.map(item => (
                    <div key={item.cca3} className="w-full flex flex-col gap-10 md:flex-row md:gap-28">
                        <div className="w-full max-w-xl">
                            <img className="w-full md:h-80" src={item.flags.svg} alt="" />
                        </div>

                        <div className="w-full max-w-xl flex flex-col justify-around">
                            <h1 className="text-3xl font-semibold">{item.name.common}</h1>

                            <div className="flex flex-col gap-5 md:flex-row md:justify-between">
                                <div className="flex flex-col gap-2">
                                    <p>
                                        {" "}
                                        <b>Native Name: </b>
                                        {item.name.nativeName[Object.keys(item.name.nativeName)[0]].official}
                                    </p>
                                    <p>
                                        {" "}
                                        <b>Population: </b>
                                        {item.population}{" "}
                                    </p>
                                    <p>
                                        {" "}
                                        <b>Region: </b>
                                        {item.region}{" "}
                                    </p>
                                    <p>
                                        {" "}
                                        <b>Sub Region: </b>
                                        {item.subregion}{" "}
                                    </p>
                                    <p>
                                        {" "}
                                        <b>Capital: </b>
                                        {item.capital}{" "}
                                    </p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <p>
                                        {" "}
                                        <b>Top Level Domain: </b>
                                        {item.tld}{" "}
                                    </p>
                                    <p>
                                        {" "}
                                        <b>Currencies: </b>
                                        {item.currencies[Object.keys(item.currencies)[0]].name}{" "}
                                    </p>
                                    <p>
                                        {" "}
                                        <b>Languages: </b>
                                        {item.languages[Object.keys(item.languages)[0]]}{" "}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-3">
                                <p>Border Countries:</p>

                                {item.borders ? (
                                    item.borders.map((item, index) => (
                                        <Link key={index} to={`/${item}`}>
                                            {" "}
                                            <button
                                                className={`w-20 h-8 shadow ${
                                                    themeCtx?.darkMode
                                                        ? "bg-dark-mode-elements"
                                                        : "bg-dark-mode-text-&-light-mode-elementes"
                                                }`}
                                            >
                                                {item}
                                            </button>{" "}
                                        </Link>
                                    ))
                                ) : (
                                    <p>-</p>
                                )}
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default CountryDetails;
