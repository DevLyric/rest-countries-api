import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountriesPage from "./pages/CountriesPage";
import CountryDetails from "./pages/CountryDetails";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
    return (
        <ThemeProvider>
            <div>
                <Router>
                    <Routes>
                        <Route path="/" element={<CountriesPage />} />
                        <Route path=":name" element={<CountryDetails />} />
                    </Routes>
                </Router>
            </div>
        </ThemeProvider>
    );
};

export default App;
