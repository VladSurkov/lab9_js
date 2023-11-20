import React from 'react';
import Counter from '../Counter/Counter';

const Task1 = () => {
    return (
        <div>
            <h3>Task 1.2</h3>
            <Counter
                start='0'
                min='-10'
                max='10'
            />
        </div>
    );
};

export default Task1;
