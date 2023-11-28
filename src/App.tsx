import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountriesPage from "./pages/CountriesPage";
import CountryDetails from "./pages/CountryDetails";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";

const App = () => {
    return (
        <ThemeProvider>
            <Header />
            <Router>
                <Routes>
                    <Route path="/" element={<CountriesPage />} />
                    <Route path=":name" element={<CountryDetails />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;
