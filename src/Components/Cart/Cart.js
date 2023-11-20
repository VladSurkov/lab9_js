import React, {useState, useEffect} from 'react';
import styles from './Cart.module.css';

const Cart = () => {
    const [initialValues, setInitialValues] = useState([
        {id: 1, name: 'Constructor LEGO', price: 300, min: 0, max: 5},
        {id: 2, name: 'Train Station', price: 200, min: 0, max: 10},
        {id: 3, name: 'Hot Wheels Track', price: 150, min: 0, max: 15},
    ]);

    const [totalNum, setTotalNum] = useState(0);
    const [quantityNum, setQuantityNum] = useState(0);

    const handleIncrement = (id) => {
        setInitialValues((prevArray) =>
            prevArray.map((obj) =>
                obj.id === id ? {...obj, min: obj.min + 1} : obj,
            ),
        );
    };

    const handleDecrement = (id) => {
        setInitialValues((prevArray) =>
            prevArray.map((obj) =>
                obj.id === id ? {...obj, min: obj.min - 1} : obj,
            ),
        );
    };

    useEffect(() => {
        let tempTotal = 0;
        let tempQuantity = 0;
        initialValues.forEach((item) => {
            tempTotal += item.price * item.min;
            tempQuantity += item.min;
        });
        setTotalNum(tempTotal);
        setQuantityNum(tempQuantity);
    }, [initialValues]);

    return (
        <table className={styles.table}>
            <tr>
                <td>Name</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Total</td>
            </tr>
            {initialValues.map((item) => {
                return (
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>
                            <button
                                data-key={item.id}
                                onClick={() => handleIncrement(item.id)}
                            >
                                +
                            </button>{' '}
                            {item.min}{' '}
                            <button
                                data-key={item.id}
                                onClick={() => handleDecrement(item.id)}
                            >
                                -
                            </button>
                        </td>
                        <td>{item.min * item.price}</td>
                    </tr>
                );
            })}
            <tr>
                <td colspan='2'>Totals</td>
                <td>{quantityNum}</td>
                <td>{totalNum}</td>
            </tr>
        </table>
    );
};

export default Cart;
