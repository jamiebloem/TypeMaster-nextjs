import {useEffect, useState} from 'react';
import LogoHeading from "../templates/LogoHeading";
import KeyboardImages from "../organism/KeyboardImages";

function TypingGame() {
    const [words, setWords] = useState([]);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [userInput, setUserInput] = useState('');
    const [showCorrect, setShowCorrect] = useState(false);
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
        const updateGame = (event) => {
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
        window.addEventListener('keydown', updateGame)
        return () => {
            window.removeEventListener('keydown', updateGame)
        }
    }, [])

    useEffect(() => {
        if (words[currentWordIndex] === userInput) {

            setShowCorrect(true);
            setTimeout(() => {

                setCurrentWordIndex(currentWordIndex + 1)
                setUserInput('')
                setShowCorrect(false)
            }, 1500)
        }
    }, [words[currentWordIndex] === userInput])
    const correctSoFar = words[currentWordIndex]?.startsWith(userInput) || words.length === currentWordIndex
    return <div className="game">
        <style jsx>{`
          .game-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .game-input {
            background-color: var(--color-primary);
            border-radius: 10px;
            width: 675px;
            margin: 50px;
            padding: 50px;
            color: white;
            text-align: center;
            transition: 1s;
          }
          
          .game-input--correctword {
            background-color: green;
          }

          .user-input {
            background: white;
            padding: 10px;
            height: 50px;
            color: hsl(22, 89%, 52%);
          }

          .wrong {
            border: 5px solid red;
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
            transform: scale(1);
            animation: pulse 2s infinite;
          }

          .correct {
            border: 5px solid dodgerblue;
          }

          .cursor {
            animation: cursor 0.75s infinite;
            color: black;
          }

          @keyframes cursor {

            0% {
              color: rgba(0, 0, 0, 1);
            }

            50% {
              color: rgba(0, 0, 0, 0);
            }

          }

          @keyframes pulse {
            0% {
              transform: scale(0.95);
              box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
            }

            70% {
              transform: scale(1);
              box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
            }

            100% {
              transform: scale(0.95);
              box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
            }
          }

          @media only screen and (min-width: 700px) {
            .game-input {
              width: 734px;
            }
          }
        `}</style>
        <LogoHeading/>
        <div className="game-container">
            <h1>Typing game</h1>
            <p>Type each word in the given amound of seconds to score!</p>
            <div className={`game-input ${showCorrect?'game-input--correctword':''}`}>
                <h3>{words[currentWordIndex]}</h3>
                <br/><br/>
                <p>Start typing</p>
                <br/>
                <h4 className={`user-input ${correctSoFar ? 'correct' : 'wrong'}`}>{userInput}<span
                    className="cursor">|</span></h4>
                <p>{currentWordIndex === words.length && 'Good job!'}</p>
                <p>Words to go: {words.length - currentWordIndex} </p>
            </div>
            <KeyboardImages/>
        </div>
    </div>
}

export default TypingGame
