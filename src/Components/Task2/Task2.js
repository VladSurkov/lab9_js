import React from 'react';
import Counter from '../Counter/Counter';

const Task2 = () => {
    const initialValues = [
        {id: 1, min: -10, start: 0, max: 10},
        {id: 2, min: -150, start: -100, max: -50},
        {id: 3, min: 400, start: 405, max: 406},
    ];

    return (
        <div>
            <h3>Task 1.2</h3>

            {initialValues.map((counter) => {
                return (
                    <Counter
                        key={String(counter.id)}
                        min={String(counter.min)}
                        start={String(counter.start)}
                        max={String(counter.max)}
                    />
                );
            })}
        </div>
    );
};

export default Task2;
