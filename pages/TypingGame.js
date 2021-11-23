import {useEffect, useState} from 'react';

function TypingGame() {
    const [words, setWords] = useState([]);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [userInput, setUserInput] = useState('');
    useEffect(() => {

        const getWords = async () => {

            const res = await fetch('https://random-word-api.herokuapp.com/word?number=10');
            const data = await res.json();
            setWords(data)
        }
        getWords()
    }, [])

    useEffect(() => {
        window.addEventListener('keydown', (event) => {
                setUserInput((previousUserInput) => previousUserInput + event.key
                )
            }
        )
    }, [])
    console.log('input', userInput)
    console.log('words', words)
    return <div>
        <p>{words[currentWordIndex]}</p>
        <p> {userInput} </p>
        <p>{words[currentWordIndex] === userInput && 'Good job!'}</p>
    </div>
}

export default TypingGame
