import { useState } from 'react'
import Garage from './Garage';


export default function Car({carinfo}) {
    const {name, model} = carinfo;
    const [color, setColor] = useState('white');
    return (
        <>
            <Garage size="small"/>
            <h3>This car is {color} {model}</h3>
        </>
    )
}
