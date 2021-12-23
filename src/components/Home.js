import React from 'react';
import './HomeStyle.css';
import NavBar from './NavBar';
import Hero from './Hero';
import About from '../containers/About Page/AboutPage';
import Box from '../containers/BoxPage/Box';
import Faq from '../containers/Faq';
import Contact from '../containers/Contacts/Contact';
import Footer from '../containers/Footer/Footer';


const Home = () =>{
    return (
        <div>

<NavBar />
<Hero />
<About />
<Box />
<Faq />
<Contact />
<Footer />
        </div>
    )
}

export default Home;