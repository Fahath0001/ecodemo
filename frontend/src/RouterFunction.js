import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import Updates from "./Updates.js"


export default function RouterFunction() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/updates-1987-01-01" element={<Updates />} />
            </Routes>

        </Router>
    )
}
