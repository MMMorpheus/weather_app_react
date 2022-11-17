import React, {useState} from 'react';

const Input = () => {

    const [inValue, setInValue] = useState('')
    const changer = (event) => {
        setInValue(event.target.value)

    }

    return (
        <div>
            <input type='text' name='inValue' value={inValue} onChange={changer} />
        </div>
    );
}

export default Input;