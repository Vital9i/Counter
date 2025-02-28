import {useState} from 'react'
import './App.css'
import {Button} from "./Components/Button.tsx";

function App() {
    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <>
            <div className="app">
                <div className="counter">
                    <h1>{count}</h1>
                    <div className="buttons">
                        <Button title="inc" onClick={increment} />
                        <Button title="dec" onClick={decrement} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;