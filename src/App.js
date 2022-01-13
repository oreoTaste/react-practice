import propTypes from "prop-types";
import React, { memo, useEffect, useState } from "react";

function App() {
  const [isLoading, setLoading] = useState(true);
  const [coinList, setCoinList] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers").then((val) => val.json()).then((json) => {
      if(json.length > 0) {
        setLoading(false);
        setCoinList(() => [...json])
        console.log(json)
      }
    });  
  }, [])

  return (
    <>
    <h1>Coin Tracker {coinList.length > 0 ? `(${coinList.length})` : null}</h1>
    {isLoading ? "Loading..." : null }
    <ul>
      {coinList.map(({id, name, symbol, quotes: {USD:{price}}}, ind) => <li key={id}>{name}({symbol}) : ${price}</li>)}
    </ul>
    </>
  );
}

export default App;
