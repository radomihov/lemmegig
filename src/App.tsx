// import ComingSoon from "./components/ComingSoon";
import {Routes, Route, useLocation} from 'react-router-dom';

import Header from "./components/header/Header.tsx";
import Home from "./components/home/Home.tsx";
import Footer from "./components/footer/Footer.tsx";
import Login from "./components/login/Login.tsx";
import About from "./components/about/About.tsx";
import Affiche from "./components/affiche/Affiche.tsx";
// import ContactForm from "./components/home/ContactForm.tsx";

function App() {
    const { pathname } = useLocation();
    return (
        <div id="box">
            <Header transparent={false}/>
            <main id="main-content">
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/login' element={<Login/>}/>
                    {/*<Route path='/register' element={<Register/>}/>*/}
                    <Route path='/affiche' element={<Affiche/>}/>
                    <Route path='/about' element={<About/>}/>
                    {/*<Route path='/contact' element={<ContactForm/>}/>*/}
                    {/*<Route path='/gigs' element={<Gigs/>}/>*/}
                    {/*<Route path='/gig/' element={<Gig/>}/>*/}
                    {/*<Route path='/profile' element={<Profile/>}/>*/}
                </Routes>
            </main>
            {pathname !== '/login' &&
                <Footer />}
        </div>
    )
}

export default App
