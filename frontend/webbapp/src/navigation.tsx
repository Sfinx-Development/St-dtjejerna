// Navigation.tsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RootLayout from "./pages/RootLayout";

const Navigation = () => {
  return (
    <Router>
      <Routes>
      <Route element={<RootLayout />}>
      
        </Route>
      </Routes>
    </Router>
  );
};

export default Navigation;
