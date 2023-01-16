import React, { useState } from "react";

const App = () => {
    const [counter, setCounter] = useState(0);
    const [value, setValue] = useState('');

    const handleClick = () => {
        setCounter(counter + 1);
        setValue(value.concat(counter));
    }

    return (
        <main className="app__wrapper">
            <h1>Hello Universe</h1>
            <div className="app__counter">                
                <button onClick={handleClick} type="button">press</button>
                <p>{counter}</p>
            </div>
            <p className="app__footer">Made with 💜 by <a className="app__link" href="https://www.linkedin.com/in/diegoec/" target="_blank" rel="noopener noreferrer">Diego Ezquerro Calvo</a></p>
        </main>
    );
}


export default App;