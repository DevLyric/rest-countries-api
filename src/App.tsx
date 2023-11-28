import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountriesPage from "./pages/CountriesPage";
import CountryDetails from "./pages/CountryDetails";

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<CountriesPage />} />
                    <Route path=":name" element={<CountryDetails />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
