import { Route, Routes } from "react-router-dom";
import Error from "./pages/Error";
import Index from "./pages/Index";
import RootLayout from "./pages/RootLayout";

import AboutUs from "./pages/AboutUs";
import Byggstad from "./pages/Byggstad";
import Contact from "./pages/Contact";
import Flyttstad from "./pages/Flyttstad";
import Fonsterputs from "./pages/Fonsterputs";
import Foretagsstad from "./pages/Foretagsstad";
import Hemstad from "./pages/Hemstad";
import Locations from "./pages/Locations";
import Offert from "./pages/Offert";
import Tradgardsfix from "./pages/Tradgardsfix";
import Trappstad from "./pages/Trappstad";

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
        <Route path="/offert" element={<Offert />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Route>
    </Routes>
  );
};

export default Navigation;
