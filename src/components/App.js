import React, { useState, useEffect } from 'react'

function App(){
    const [picture, setPicture] = useState('')
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => { return (
            setIsLoaded(true), 
            setPicture(data.message))});
    }, []
    )

    if (!isLoaded) return <p>Loading...</p>

    return <img src= {picture} alt="A Random Dog" />
}

export default App
