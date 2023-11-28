import { useTheme } from "../context/ThemeContext";
import Search from "./icons/Search";

interface FilterProps {
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    inputValue: string;
    selectValue: string;
}

const Filter = ({ onInputChange, onSelectChange, inputValue, selectValue }: FilterProps) => {
    const themeCtx = useTheme();

    return (
        <section className="flex flex-col gap-8 my-12 md:flex-row md:justify-between">
            <div
                className={`flex items-center gap-3 shadow-md w-full max-w-xl rounded px-5 ${
                    themeCtx?.darkMode ? "bg-dark-mode-elements" : "bg-dark-mode-text-&-light-mode-elementes"
                }`}
            >
                <Search />
                <input
                    type="text"
                    placeholder="Search for a country..."
                    className="w-full h-full outline-none bg-transparent py-4"
                    value={inputValue}
                    onChange={onInputChange}
                />
            </div>

            <select
                className={`outline-none shadow-md py-4 px-5 rounded cursor-pointer ${
                    themeCtx?.darkMode ? "bg-dark-mode-elements" : "bg-dark-mode-text-&-light-mode-elementes"
                } `}
                value={selectValue}
                onChange={onSelectChange}
            >
                <option value="">Filter By Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </section>
    );
};

export default Filter;
