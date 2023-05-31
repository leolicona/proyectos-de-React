const RANDOM_FACT = "https://catfact.ninja/fact";
export const getRandomFacts = async () => {
    try {
        const res = await fetch(RANDOM_FACT);
        const data = await res.json();
        const { fact } = data;
        console.log("Facts", fact);
        return fact;
    } catch (err) {
        return console.log(err);
    }

};
