import React from 'react'
import { useState } from 'react'

export const Title = () => {
  const [title, setTitle] = useState({header:'Change me'});
  const changeText = (e) => {
    setTitle({header: e.target.value});
    // setTitle({...e.target.value});
  }
  return (
    <>
        <h2>Changing The Title  Object</h2>
        <h3>{title?.header}</h3>
        <input type="text" placeholder='Change the title' onChange={changeText}/>
    </>
  )
}
