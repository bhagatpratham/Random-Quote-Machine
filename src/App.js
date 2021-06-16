import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/footer";
import Quotes from "./components/quotes.js";

function QuotesGenerator() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getQuotes();
  }, []);

  const getQuotes = () => {
    const inspo = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(inspo)
      .then((res) => res.json())
      .then((data) => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = data.quotes[randomNum];
        console.log(randomQuote);
        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      });
  };

  const handleClick = () => {
    getQuotes();
  };

  return (
    <div>
      <Quotes quote={quote} author={author} handleClick={handleClick} />
      <Footer />
    </div>
  );
}

export default QuotesGenerator;
