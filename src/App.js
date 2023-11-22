import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import PlanCard from "./components/PlanCard";
import DashBoard from "./components/DashBoard";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="main">
                <Sidebar />
                <DashBoard />
            </div>
        </div>
    );
}

export default App;
