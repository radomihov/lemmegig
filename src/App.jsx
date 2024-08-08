import {Routes, Route, useLocation} from 'react-router-dom';

import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import Footer from "./components/footer/Footer.jsx";
import Login from "./components/login/Login.jsx";
import About from "./components/about/About.jsx";
import Affiche from "./components/affiche/Affiche.jsx";
import Gigs from "./components/gigs/Gigs.jsx";
import Gig from "./components/gigs/Gig.jsx";

function App() {
    const { pathname}  = useLocation();
    return (
        <div id="box">
            <Header transparent={false}/>
            <main id="main-content">
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/affiche' element={<Affiche/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/gigs' element={<Gigs/>}/>
                    <Route path='/gigs/:id' element={<Gig/>}/>
                </Routes>
            </main>
            {pathname !== '/login' &&
                <Footer />}
        </div>
    )
}

export default App
