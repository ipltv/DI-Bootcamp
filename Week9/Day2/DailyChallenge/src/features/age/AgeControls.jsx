import React from 'react'
import { useDispatch } from 'react-redux';
import { ageUpAsync, ageDownAsync } from './ageSlice';

const AgeControls = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => { dispatch(ageUpAsync()) }}>UP</button>
            <button onClick={() => { dispatch(ageDownAsync()) }}>DOWN</button>
        </div>
    )
}

export default AgeControls