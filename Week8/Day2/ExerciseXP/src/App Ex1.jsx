import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import ShopScreen from './components/ShopScreen';
import ErrorBoundary from "./components/ErrorBoundary";


function App() {

  return (
    <BrowserRouter>

      <Navbar bg="light">
        <Container>
          <Nav className="gap-2">
            <NavLink to="/" className={({ isActive }) => isActive ? "btn btn-primary" : "btn btn-outline-primary"}>Home</NavLink>
            <NavLink to="/profile" className={({ isActive }) => isActive ? "btn btn-primary" : "btn btn-outline-primary"}>Profile</NavLink>
            <NavLink to="/shop" className={({ isActive }) => isActive ? "btn btn-primary" : "btn btn-outline-primary"}>Shop</NavLink>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<ErrorBoundary fallback="An errodr has occured. Error in home"><HomeScreen /></ErrorBoundary>} />
        <Route path="/profile" element={<ErrorBoundary fallback="An errodr has occured. Error in profile"><ProfileScreen /></ErrorBoundary>} />
        <Route path="/shop" element={<ErrorBoundary fallback="An errodr has occured. Error in shop"><ShopScreen /></ErrorBoundary>} />
      </Routes>
    </BrowserRouter >
  )
}

export default App
