import React, { useState, useEffect } from "react";
import { GrTwitter } from "react-icons/gr";
import axios from "axios";

export default function QuoteBox() {
  const [quote, setQuote] = useState({
    content: "Duis ea quis non aute est est officia deserunt ad velit.",
    author: "Jesus Nunez",
  });

  const getQuote = async () => {
    let url = "https://api.quotable.io/random";
    const { data } = await axios.get(url);
    setQuote({ author: data.author, content: data.content });
  };

  useEffect(() => {
    getQuote();
  }, []);

  let twitterUrl = `https://twitter.com/intent/tweet?text="${quote.content}"${quote.author}&hashtags=quotes`;
  const twitterButton = (
    <a href={twitterUrl} className="quote-button" id="tweet-quote" target="_blank">
      Tweet Me <GrTwitter />
    </a>
  );

  return (
    <article id="quote-box">
      <div id="quote-content">
        <p id="text">{quote.content}</p>
        <p id="author">- {quote.author}</p>
      </div>
      <div id="quote-buttons">
        {twitterButton}
        <button id="new-quote" onClick={getQuote} className="quote-button">
          New Quote
        </button>
      </div>
    </article>
  );
}
