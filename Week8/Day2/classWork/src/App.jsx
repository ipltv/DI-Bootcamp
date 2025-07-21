import { useState } from 'react'
import './App.css'
import { Child } from './components/Child'
import { Parent } from './components/Parent'
import { Counter } from './components/Counter'
import ErrorBoudary from './Helpers/ErrorBoudary'
import Home from './components/Home'
import Shop from './components/Shop'
import { Routes, Route, Link } from 'react-router'
import Nav from './components/Nav'
import Products from './components/Products'

function App() {

  return (
    <>
      <h2>Children / Error Boundary / Routering</h2>
      {/* <ErrorBoudary fallback="Something went wrong on Top Counter">
        <Counter />
      </ErrorBoudary>

      <Parent admin='ziv'>
        <h2>Admin panel</h2>
        <Child />
      </Parent>
      <Counter /> */}
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/product/:id' element={<Products />} />
        <Route path='/game' element={<Counter />} />
        <Route path='*' element={<h2>404 no route match your search</h2>} />
      </Routes>
    </>
  )
}

export default App
