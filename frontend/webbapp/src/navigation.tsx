import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import RootLayout from "./pages/RootLayout";
import Error from "./pages/Error";

import Hemstad from "./pages/Hemstad";
import Byggstad from "./pages/Byggstad";
import Fonsterputs from "./pages/Fonsterputs";
import Foretagsstad from "./pages/Foretagsstad";
import Trappstad from "./pages/Trappstad";
import Flyttstad from "./pages/Flyttstad";
import Tradgardsfix from "./pages/Tradgardsfix";
import AboutUs from "./pages/AboutUs";
import Locations from "./pages/Locations";


const Navigation = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Index />}></Route>
        <Route path="*" element={<Error />}></Route>
        <Route path="/om-oss" element={<AboutUs />}></Route>
        <Route path="/hemstad" element={<Hemstad />}></Route>
        <Route path="/byggstad" element={<Byggstad />}></Route>
        <Route path="/flyttstad" element={<Flyttstad />}></Route>
        <Route path="/fonsterputs" element={<Fonsterputs />}></Route>
        <Route path="/foretagsstad" element={<Foretagsstad />}></Route>
        <Route path="/trappstad" element={<Trappstad />}></Route>
        <Route path="/tradgardsfix" element={<Tradgardsfix />}></Route>
        <Route path="/orter" element={<Locations />}></Route>
       
      </Route>
    </Routes>
  );
};

export default Navigation;
