import React from 'react'
import { useState } from 'react';

export default function Events() {
    const [isToggleOn, setTonggle] = useState("ON");

    const clickMe = () => {
        alert("I was clicked");
    }
    const handleKeyDown = (e) => {
        console.log(e.code);

        if (e.code === "Enter") {
            alert("The Enter key was pressed, your input is: " + e.target.value)
        }
    }

    const handleToggle = (e) => {
        if (isToggleOn === "ON")
        {
            setTonggle("OFF");
        }else{
            setTonggle("ON");
        }
    }

    return (
        <>
            <button onClick={clickMe}>Click!</button><br />
            <input type="text" onKeyDown={(e) => handleKeyDown(e)} /><br />
            <button onClick={(e) => handleToggle(e)}>{isToggleOn}</button>
        </>
    )
}
