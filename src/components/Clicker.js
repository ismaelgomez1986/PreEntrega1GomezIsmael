import { useState } from "react";

const Clicker = () => {

    // let count = 0;

    const [count, setCount] = useState(0)

    const clickHandler = () => {
        console.log('Click')
        setCount(count + 1)
        // count++;
    };

    console.log('Se hizo render');


    return (
        <div className="py-3">
            <strong >Clicker</strong>
            <button onClick={clickHandler} className="btn mx-5">Aumentar</button>
            <strong>{count}</strong>
        </div>
    )
}
export default Clicker 