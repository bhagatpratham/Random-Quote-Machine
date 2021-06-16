import React from "react";

const Quotes = () => {
  return (
    <div>
      <div className='quote-box'>
        <div className='quote-text'>
          <span className='text'></span>
        </div>
        <div className='quote-author'>
          <span className='author'></span>
        </div>
        <div className='buttons'>
          <button className='button' id='new-quote'>
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
