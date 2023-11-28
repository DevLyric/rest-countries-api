import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Country } from "../types/Country";
import CountryCard from "./CountryCard";
import Filter from "./Filter";

const FetchData = () => {
    const [items, setItems] = useState<Country[]>([]);
    const [inputValue, setInputValue] = useState<string>("");
    const [selectValue, setSelectValue] = useState<string>("");
    const [filteredData, setFilteredData] = useState<Country[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/all`)
            .then(response => response.json())
            .then(data => {
                setItems(data);
                setLoading(false);
                console.log(data);
            });
    }, []);

    useEffect(() => {
        const result = items.filter(
            item =>
                (!inputValue || item.name.common.toLowerCase().includes(inputValue.toLowerCase())) &&
                (!selectValue || item.region === selectValue)
        );

        setFilteredData(result);
    }, [inputValue, selectValue, items]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectValue(event.target.value);
    };

    return (
        <>
            <Filter
                onInputChange={handleInputChange}
                onSelectChange={handleSelectChange}
                inputValue={inputValue}
                selectValue={selectValue}
            />

            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20">
                {loading ? (
                    <p className="animate-bounce">Loading...</p>
                ) : (
                    filteredData.map(item => (
                        <Link key={item.name.common} to={item.cca3.toLowerCase()}>
                            <CountryCard
                                flag={item.flags.png}
                                name={item.name.common}
                                population={item.population}
                                region={item.region}
                                capital={item.capital}
                            />
                        </Link>
                    ))
                )}
            </section>
        </>
    );
};

export default FetchData;
