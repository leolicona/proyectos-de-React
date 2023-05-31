import { useState, useEffect } from 'react';
import { getRandomFacts } from "../services/facts"
const useCatFact = () => {
    const [fact, setFacts] = useState();

    const refreshFact = () => {
        getRandomFacts().then((newFact) => {
            setFacts(newFact);
        });
    };
 
    useEffect(() => {
        refreshFact();
    }, []);

    return [fact, refreshFact]
}

export { useCatFact }