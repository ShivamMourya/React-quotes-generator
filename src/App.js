import React, { useEffect, useState } from "react";
import "./App.scss";
import colorsArray from "./colorsArray";

// font awesome links and icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

let quotesAPI =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

function App() {
  const [quote, setQuote] = useState("never give up !");
  const [author, setAuthor] = useState("shubbhu");
  const [randomNumber, setRandomNumber] = useState(0);
  const [quotesArray, setQuotesArray] = useState(null);

  const [colors, setColors] = useState("#282c34");

  const fetchQuotes = async (url) => {
    const response = await fetch(url);
    const parsedJSON = await response.json();
    setQuotesArray(parsedJSON.quotes);
  };

  useEffect(
    () => {
      fetchQuotes(quotesAPI);
    } /*[quotesAPI]*/
  );

  const generateRandomNumber = () => {
    let randomInteger = Math.floor(quotesArray.length * Math.random());
    setRandomNumber(randomInteger);
    setQuote(quotesArray[randomInteger].quote);
    setAuthor(quotesArray[randomInteger].author);
    // for random colors
    setColors(colorsArray[randomInteger]);
  };

  // const quotesArray = [
  //   {
  //     quote: "one",
  //     author: "one",
  //   },
  //   {
  //     quote: "two",
  //     author: "two",
  //   },
  //   {
  //     quote: "three",
  //     author: "three",
  //   },
  //   {
  //     quote: "four",
  //     author: "four",
  //   },
  //   {
  //     quote: "five",
  //     author: "five",
  //   },
  // ];
  return (
    <div className="App">
      <header
        className="App-header"
        style={{ backgroundColor: colors, color: colors }}
      >
        <div id="quote-box" style={{ color: colors }}>
          {/* <h1>random number {randomNumber}</h1> */}
          <h1 id="text">"{quote}"</h1>
          <p id="author">- {author}</p>

          <div className="button">
            <a
              style={{ backgroundColor: colors }}
              id="tweet-quote"
              href={`http://www.twitter.com/intent/tweet?text=${quote} -${author}`}
              target="_blank"
              rel="noreferrer"
            >
              {/* tweet */}
              <FontAwesomeIcon icon={faTwitter} />
            </a>

            <button
              style={{ backgroundColor: colors }}
              id="new-quote"
              onClick={generateRandomNumber}
            >
              Next Quotes
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
