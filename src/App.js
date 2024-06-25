import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePageLayout from "./pages/HomePageLayout/HomePageLayout";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePageLayout />}></Route>
            </Routes>
        </div>
    );
}

export default App;
