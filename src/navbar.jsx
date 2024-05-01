import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './assets/taskmaster.svg'

function NavBar(){
    return(
        <div className='text-center bg-dark'>
            <img src={logo} id='logo'></img>
            <hr />

        </div>
  
        
    )
}


export default NavBar