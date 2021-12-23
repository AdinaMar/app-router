import React, {useState} from 'react';
import './NavBarStyle.css';
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import logo from '../logo2.png';
import Routes from '../routes/Routes.js';


const NavBar = () => {

    console.log(Routes);
    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    
    return (
        <header>
<nav className="navbar">
    <div className="logo">
        <Link to='/'><img src={logo} alt=""></img></Link>
    </div>
    <ul className={click ? "nav-menu active" : "nav-menu"}>
      
        {Routes.map((data,index)=>{
            return(
                <li className='nav-item' key={index}> 
                    <Link to={data.route} className="nav-link">{data.name}</Link>
                </li>
            )
        })}
    </ul>
    <div className="wrap" onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color: "#fffff"}}/>) : ( <FaBars size={20}  style={
            {color:'#ffffff'}
        }/>)}
        
       
    </div>
</nav>
        </header>
    )
}

export default NavBar;