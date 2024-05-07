import { useState } from 'react'
import './App.css'

import Tabs from './components/Tab/Tabs'
import Tab2 from './components/Tab2'
import Tab3 from './components/Tab/Tab3'

function App() {
  const [tab, setTab] = useState("tabss");

  return (
    < >
      <button onClick={(e) => setTab("tabss")}>Tab1</button>
      <button onClick={(e) => setTab("Tab2")}>Tab2</button>
      <button onClick={(e) => setTab("Tab3")}>Tab3</button>

      {tab === "tabss" ? (
        <Tabs  />
      ) : tab === "Tab2" ? (
        <div>
          <Tab2/>
        </div>
      ) : (
        <div>
          <Tab3 />
        </div>
      )}
    </>
  );
}

export default App
