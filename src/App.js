import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import PlanCard from "./components/PlanCard";
import DashBoard from "./components/DashBoard";
import { useState } from "react";

function App() {
  const [mob,setMob] = useState(false)

    return (
        <div className="App">
            <Header />
            <div className="main">
              
               {<Sidebar />}
                <DashBoard mob={mob} setMob={setMob}/>
            </div>
        </div>
    );
}

export default App;
