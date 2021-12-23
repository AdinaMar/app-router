import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Scatola from './assest/Scatola';

import Domande from './assest/Domande';
import Contatto from './assest/Contatto';
import Despre from './assest/Despre';


function App() {
  return (
   
 <Routes>
   <Route path="/" element={<Home />}/>
   <Route path="/about" element={<Despre />}/>
   <Route path="/box" element={<Scatola />} />
   <Route path="/FAQ" element ={<Domande />}/>
   <Route path="/contact" element= {<Contatto />} />

 </Routes>
      
    
  );
}

export default App;
