import React, {useState} from 'react';
import style from './Counter.module.css';

const Counter = (props) => {
    let [currentValue, setCurrentValue] = useState(Number(props.start));

    const addMoreValue = () => {
        if (currentValue != Number(props.max)) {
            setCurrentValue((currentValue += 1));
        }
    };

    const reduceTheValue = () => {
        if (currentValue != Number(props.min)) {
            setCurrentValue((currentValue -= 1));
        }
    };

    const resetValues = () => {
        setCurrentValue(Number(props.start));
    };

    return (
        <div>
            <p>Поточний рахунок: {currentValue}</p>
            <button
                className={style.plus}
                onClick={addMoreValue}
            >
                +
            </button>
            <button
                className={style.minus}
                onClick={reduceTheValue}
            >
                -
            </button>
            <button
                className={style.reset}
                onClick={resetValues}
            >
                reset
            </button>
        </div>
    );
};

export default Counter;
