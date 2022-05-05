import React from 'react';
import {Route, Routes} from "react-router";
import Home from "../Home";
import Human from "../Human";
import {Navbar} from "../../components/layout";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="people" element={<Home/>}/>
                <Route path="human/:name" element={<Human/>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </div>
    );
}

export default App;
