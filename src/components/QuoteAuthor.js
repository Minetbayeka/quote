

import React, { useState, useEffect } from 'react';
import './QuoteAuthor.css'

const quotes = [
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { quote: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
  // ... more quotes
];

function Quote({ quote, author }) {
  return (
    <div className='quote-container'>
      <p className='quote'>{quote}</p>
      <p className='quote'>- {author}</p>
    </div>
  );
}

function NewQuoteButton({ onClick }) {
  return <button className='new-quote-button' onClick={onClick}>Fetch New Quote</button>;
}
 
function QuoteContainer() {
  const [quoteData, setQuoteData] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuoteData(quotes[randomIndex]);
  }, []);

  const handleNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuoteData(quotes[randomIndex]);
  };

  if (!quoteData) {
    return <p>Loading...</p>;
  }

  const { quote, author } = quoteData;

  return (
    <div>
      <Quote quote={quote} author={author} />
      <NewQuoteButton onClick={handleNewQuote} />
    </div>
  );
}

export default QuoteContainer;


/*import React, { useState, useEffect } from 'react'
import './QuoteAuthor.css'

const QuoteAuthor = () => {

  const [quote, author] = useState({
      quote: 'This is my first quote.',
      author: 'Beyaka.'

  })

  useEffect(()=>{}, []);


   /* const [quote, author] =useState({
      
    })*/
  /*return (
    <div className='quoteauthor-container'>
        <p className='quote'>{quote}</p>
        <p className='author'>{author}</p>

    </div>
  )
}



export default QuoteAuthor*/

