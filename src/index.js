import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Nav } from "./components/nav";

import "./styles.css";

function App() {
  const [items, addItems] = useState([1, 2]);

  return (
    <div className="App">
      <header className="header">header</header>
      <main className="main">
        <div className="content">content</div>
        <aside className="aside">
          <Nav
            items={items}
            onAddItemClick={() => addItems([...items, items.length + 1])}
            onRemoveItemClick={() => addItems(items.slice(1))}
          />
        </aside>
      </main>
      <footer className="footer">footer</footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
