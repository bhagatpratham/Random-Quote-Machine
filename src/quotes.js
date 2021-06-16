import React from "react";

const Quotes = ({ handleClick, quote, author }) => {
  return (
    <div>
      <div className='quotes-container'>
        <div id='quotes-box'>
          <div id='text'>{quote}</div>
          <div id='author'> {author}</div>
          <button onClick={handleClick} id='new-quote'>
            New quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
