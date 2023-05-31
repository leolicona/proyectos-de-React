import { useEffect, useState } from "react"
import { getRandomFacts } from "./services/facts"
import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from './hooks/useCatFact'
import "./app.css"

function App () {
  const [fact, refreshFact] = useCatFact();
  const image = useCatImage({ fact });

  const handleGetFacts = async () => {
      refreshFact();
  };

  return (
    <main>
      <section>
        <h1>App Gatitos</h1>
        {fact && <p>{fact}</p>}
        <img src={image} alt="Image that describes de Fact" />
        <button onClick={handleGetFacts}>New Fact</button>
      </section>
    </main>
  );
}

export default App
