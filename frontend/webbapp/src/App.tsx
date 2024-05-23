// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from 'react'
import { Outlet } from 'react-router-dom';

import './App.css'

function App() {
 

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
}

export default App
