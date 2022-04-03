import React, {useState} from "react";

const Componente2 = () => {


    const [edad, setEdad] = useState(88);


    const subirEdad = () => {
        setEdad(edad + 1)
    }


    return (
        <div>
            <h1>Smith, John</h1>
            <p>Age {edad}</p>
            <p>Hair Color: Brown</p>
            <button onClick={subirEdad}>Birthday Button for Jane Doe</button>
        </div>
    );
}

export default Componente2;
