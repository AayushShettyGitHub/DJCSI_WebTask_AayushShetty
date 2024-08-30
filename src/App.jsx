import { useState } from 'react'
import Nav from './Nav'
import Core from './Core'
import Footer from './Footer'
import Contact from './Contact'
import Events from './Events'
import Achievements from './Achievements'
import AboutUs from './AboutUs'
import './index.css';

const App=()=>{
    return(
        <div className="holder">
            <Nav />
<Core />
<Events />
<Achievements />
<AboutUs />
<Contact />
<Footer />
    
</div>


)
}
export default App
