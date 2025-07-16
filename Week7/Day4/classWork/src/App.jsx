import { Fragment } from 'react';
import './App.css'
import Hello from './Hello'
import User from './components/User'
import users from './users.json';

// let users = [
//   { name: 'Jhon', email: 'jjj@gmail.com', username: 'jhonjhon' },
//   { name: 'Nils Barsikovich', email: 'nils@gmail.com', username: 'nilsB' },
//   { name: 'Vesta', email: 'vvv@gmail.com', username: 'vesta' }
// ];

function App() {
  return (
    <>
      <h2>React</h2>
      {users.map((item) => {
        return (
          <Fragment key={item.id}>
            <User userInfo={item} show={true} />
          </Fragment>)
      })}
    </>
  )
}

export default App

/**
 * Create folder components
 * Create User component in the components folder
 * User will have - name, email, username
 * Render User on App
 */