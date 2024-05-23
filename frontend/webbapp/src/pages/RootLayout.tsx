// pages/RootLayout.tsx

import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div>
      {/* Här kan du lägga till din gemensamma layout, t.ex. en header eller navbar */}
      <header>
        <h1>Välkommen till min app</h1>
        {/* Lägg till navigering här om du vill */}
      </header>
      <main
        className="bg-neutral-100 flex flex-1 flex-col"
        style={{ width: "100vw" }}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
