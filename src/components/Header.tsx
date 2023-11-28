import { useTheme } from "../context/ThemeContext";
import Moon from "./icons/Moon";

const Header = () => {
    const themeCtx = useTheme();

    return (
        <header
            className={`h-20 shadow-md flex items-center px-5 ${
                themeCtx?.darkMode ? "bg-dark-mode-elements" : "bg-dark-mode-text-&-light-mode-elementes"
            }`}
        >
            <div className="container mx-auto flex items-center justify-between">
                <h1 className="text-xl md:text-2xl font-bold">Where in the world?</h1>
                <button onClick={themeCtx?.toggleTheme} className="flex items-center gap-3">
                    <Moon />
                    <p className="font-semibold">Dark Mode</p>
                </button>
            </div>
        </header>
    );
};

export default Header;
