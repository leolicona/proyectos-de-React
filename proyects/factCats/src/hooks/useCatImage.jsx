import { useState, useEffect } from 'react';

const useCatImage = ({fact}) => {   
    const [image, setImage] = useState()
    console.log("image", image)

    useEffect(() => {
        if (!fact) return
        const threeFirstWords = fact.split(" ", 3).join(" ")
        fetch(`https://api.thecatapi.com/v1/images/search?limit=1`)
            .then((res) => res.json())
            .then((data) => {
                const {url} = data[0]
                setImage(url)
            })
    }, [fact])

    return image
}    

export { useCatImage }