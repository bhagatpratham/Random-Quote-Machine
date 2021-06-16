import "./App.css";
import Quotes from "./quotes";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const getQuotes = () => {
    const url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <div className='App'>
      <h1>Random Quote Machine</h1>
      <Quotes />
    </div>
  );
}

export default App;
