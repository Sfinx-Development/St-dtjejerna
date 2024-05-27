import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import RootLayout from "./pages/RootLayout";
import Error from "./pages/Error";
import ServicePage from "./components/ServicePage";

const Navigation = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Index />}></Route>
        <Route path="*" element={<Error />}></Route>
        <Route path="hemstad" element={<ServicePage image="/images/hemstad.jpg" title="Hemstäd" description="Information om Hemstäd." />} />
        <Route path="byggstad" element={<ServicePage image="/images/byggstad.jpg" title="Byggstäd" description="Information om Byggstäd." />} />
        <Route path="flyttstad" element={<ServicePage image="/images/flyttstad.jpg" title="Flyttstäd" description="Information om Flyttstäd." />} />
        <Route path="fonsterputs" element={<ServicePage image="/images/fonsterputs.jpg" title="Fönsterputs" description="Information om Fönsterputs." />} />
        <Route path="foretagsstad" element={<ServicePage image="/images/foretagsstad.jpg" title="Företagsstäd" description="Information om Företagsstäd." />} />
        <Route path="trappstad" element={<ServicePage image="/images/trappstad.jpg" title="Trappstäd" description="Information om Trappstäd." />} />
        <Route path="tradgardsfix" element={<ServicePage image="/images/tradgardsfix.jpg" title="Trädgårdsfix" description="Information om Trädgårdsfix." />} />
      </Route>
    </Routes>
  );
};

export default Navigation;
