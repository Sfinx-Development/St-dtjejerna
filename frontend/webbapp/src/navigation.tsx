import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import RootLayout from "./pages/RootLayout";
import Error from "./pages/Error";
import ServicePage from "./components/ServicePageComponent";
import {serviceDescriptions} from "./serviceDescriptions"

const Navigation = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Index />}></Route>
        <Route path="*" element={<Error />}></Route>
        {Object.entries(serviceDescriptions).map(([key, { image, title, description }]) => (
          <Route
            key={key}
            path={key}
            element={
              <ServicePage
                image={image}
                title={title}
                description={description}
                // features={features}
              />
            }
          />
        ))}
      </Route>
    </Routes>
  );
};

export default Navigation;
