import React, {useState} from "react";

const Componente1 = () => {


    const [edad, setEdad] = useState(45);


    const subirEdad = () => {
        setEdad(edad + 1)
    }


    return (
        <div>
            <h1>Doe, Jane</h1>
            <p>Age {edad}</p>
            <p>Hair Color: Black</p>
            <button onClick={subirEdad}>Birthday Button for Jane Doe</button>
        </div>
    );
}

export default Componente1;
