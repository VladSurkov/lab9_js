import React, {useState, useEffect} from 'react';
import style from './Task4.module.css';

const Task4 = () => {
    let [isGameStarted, setIsGameStarted] = useState(false);
    let [mainNumber, setMainNumber] = useState(0);
    const [currentInputValue, setCurrentInputValue] = useState('');
    const [arr, setArr] = useState([]);
    const [attempts, setAttempts] = useState(0);

    const startGameHandler = () => {
        setIsGameStarted(true);

        const randomNumber = Math.floor(Math.random() * 1000) + 1;

        setMainNumber(randomNumber);
    };

    const checkNumberHandler = () => {
        if (currentInputValue > mainNumber) {
            setArr((prevArr) => [...prevArr, `N < ${currentInputValue}`]);
            setAttempts((prevAttempts) => prevAttempts + 1);
        } else if (currentInputValue < mainNumber) {
            setArr((prevArr) => [...prevArr, `N > ${currentInputValue}`]);
            setAttempts((prevAttempts) => prevAttempts + 1);
        } else {
            alert('Good Job!');
            window.location.reload();
        }
    };

    useEffect(() => {
        if (attempts === 11) {
            alert('Game Over');
            window.location.reload();
        }
    }, [attempts]);

    return (
        <div>
            <h3>Task 3</h3>

            <div className={style.block}>
                <div className={style.header}>
                    <button
                        onClick={startGameHandler}
                        disabled={isGameStarted ? true : false}
                    >
                        New Game
                    </button>
                    <input
                        value={currentInputValue}
                        onChange={(event) => {
                            setCurrentInputValue(event.target.value);
                        }}
                    />
                    <button
                        onClick={checkNumberHandler}
                        disabled={isGameStarted ? false : true}
                    >
                        Check
                    </button>
                </div>

                <div className={style.information}>
                    <p>Information:</p>

                    {arr.map((item) => {
                        return <p>{item}</p>;
                    })}
                </div>

                <p>Attempts: {attempts}</p>
            </div>
        </div>
    );
};

export default Task4;
