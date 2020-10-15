import React, {useState} from "react";
import './App.css';

function App() {
    const iCounters = [0, 0, 0];

    const [counters, setCounters] = useState(iCounters);
    const addCounter = () => {
        const newCounters = [...counters];
        newCounters.push(0);
        setCounters(newCounters);
    }
    const delCounter = (index)=>{
        const newCounter = counters.filter((el, i )=> i !== index)
        setCounters(newCounter)
    }

    return (
        <div className='App'>

            <button onClick={addCounter}>ADD</button>
            {counters.map((el, i)=> <div>
                <button>+</button>
                {el}
                <button>-</button>
                <button onClick={()=> delCounter(i)}>DEL</button>
            </div>)}


        </div>
    );
}

export default App