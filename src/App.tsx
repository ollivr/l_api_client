import { Component, lazy } from "solid-js";
import { Routes, Route } from "solid-app-router";

import { Header } from "./components/Header"

const HomePage = lazy(() => import("./pages/HomePage"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));


const App: Component = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/detail/:id" element={<ProductDetail />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </div>
    );
};

export default App;
