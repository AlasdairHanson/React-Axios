import React, {useState} from 'react';
import BoilingVerdict from './BoilingVerdict';

const Calculator = () => {
    const [temp, setTemp] = useState('');
    const updateTemperature = (e) => {
        setTemp(e.target.value);
    }

    return (
        <fieldset>
            <legend>
                Enter a temp in celsius:
            </legend>
            <input>
                type="text"
                value={temp}
                onChange{updateTemperature}
            </input>
            <BoilingVerdict celsius={parseFloat(temp)} />
        </fieldset>
    )
}

 export default Calculator;
