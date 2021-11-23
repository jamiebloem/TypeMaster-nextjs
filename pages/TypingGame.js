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

        const ignoredKeys = ['Enter', 'Alt', 'Shift', 'Control'];
        window.addEventListener('keydown', (event) => {
                if (ignoredKeys.includes(event.key)) {
                    return
                }
                if (event.key === 'Backspace') {
                    return setUserInput((previousUserInput) => {
                        return previousUserInput.slice(0, -1);
                    })
                }
                setUserInput((previousUserInput) => {
                        return previousUserInput + event.key
                    }
                )
            }
        )
    }, [])
    return <div className="game">
        <style jsx>{`
          .game {
            background-color: var(--color-primary);
            border-radius: 10px;
            width: 50%;
            margin: 50px;
            padding: 50px;
            color: white;
          }
        `}</style>
        <div class="game-input">
            <h1>Typing game</h1>
            <p>{words[currentWordIndex]}</p>
            <p>{userInput}</p>
            <p>{words[currentWordIndex] === userInput && 'Good job!'}</p>
        </div>
    </div>
}

export default TypingGame
