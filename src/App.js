import { useState, useEffect } from "react";
import "./App.css";
import EmojiArr from "./emoji.json";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = EmojiArr.filter((emoji) => {
      return emoji.title.toLowerCase().includes(search.toLowerCase());
    });
    setData(newData);
  }, [search]);

  return (
    <div className="App">
      <h1> Emoji Search</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {data.map((emoji) => (
        <div key={emoji.title}>
          <div
            onClick={() => {
              navigator.clipboard.writeTex(emoji.symbol);
            }}
          >
            {emoji.symbol} {emoji.title}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
