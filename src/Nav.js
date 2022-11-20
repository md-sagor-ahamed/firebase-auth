import Container from 'react-bootstrap/Container';
import { NavLink, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { signOut } from 'firebase/auth';
import { auth } from "./utils/firebase.config"



export default function Nav() {
  const navigate = useNavigate()
    return (
            <Navbar>
              <Container>
                <Navbar.Brand href="#home">Firebase Auth</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                  <Navbar>
                    <NavLink to="/register" className="m-1 ">Register</NavLink>
                    <NavLink to="/profile" className="m-1">Profile</NavLink>
                    <NavLink to="/private" className="m-1">Private</NavLink>
                    <NavLink onClick={()=> {
                      signOut(auth)
                      navigate('/login')
                      }} to="/login" className="m-1">Login</NavLink>
                  </Navbar>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          );
}
