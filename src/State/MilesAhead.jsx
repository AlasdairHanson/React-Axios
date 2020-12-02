import React, {useState} from 'react';

const MilesAhead = () => {
    const [steps, setSteps] = useState(0);

    function increment() {
        setSteps(prev => prev +1);
    }

    return (
        <>
            <p>Today, you've taken {steps}</p>
            <br></br>
            <button onClick={increment}>Take another step</button>
        </>
    )
}

export default MilesAhead;