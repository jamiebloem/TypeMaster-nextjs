import {useEffect, useState} from 'react';

function TypingGame() {
    const [words, setWords] = useState([]);

    useEffect(() => {

        const getWords = async () => {

            const res = await fetch('https://random-word-api.herokuapp.com/word?number=10');
            const data = await res.json();
            setWords(data)

        }
        getWords()
    }, [])

    return <div>
        <h1>Hi</h1>
        {words.map(word => (
            <div key={word}>
                <h1> {word}</h1>
            </div>
        ))}
    </div>
}

export default TypingGame
