//Collaborated with Daisy, Anthony, Christian, Kye, Richard, Josh, Viviana

import React, { useState } from 'react';
const PersonCard = (props) => {
    const { firstName, lastName, age, hairColor } = props
    const [ageActual, setAgeActual] = useState(age)


    const addAge = () => {
        setAgeActual(ageActual + 1)
    }

    return (
        <div>
            <h1 style={{ color: "green" }}>{firstName} {lastName}</h1>
            <p>Age: {ageActual}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={addAge}>Happy Birthday</button>
        </div>
    );
}
export default PersonCard;
