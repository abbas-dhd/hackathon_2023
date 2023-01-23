import classes from "./Body.module.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import HeroSection from "./HeroSection";
import MenSectionCards from "./MenSectionCards";
import VideoPage from "./Pages/VideoPage";
import ProductList from "./ProductList";
import ProductPage from "./ProductPage";
import Home from "./Pages/Home";
import MenuPage from "./MenuPage";

const Body = () => {
  return (
    <div className={classes["main-container"]}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/clips" element={<VideoPage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </div>
  );
};

export default Body;
