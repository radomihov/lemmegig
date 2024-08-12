import {Routes, Route} from 'react-router-dom';
import {useState} from "react";

import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import Footer from "./components/footer/Footer.jsx";
import Login from "./components/auth/Login.jsx";
import About from "./components/about/About.jsx";
import Affiche from "./components/affiche/Affiche.jsx";
import Gigs from "./components/gigs/Gigs.jsx";
import Gig from "./components/gigs/Gig.jsx";
import Register from "./components/auth/Register.jsx";

import {AuthContext} from "./contexts/AuthContext.js";

const initialState = {
    token: localStorage.getItem('token')
}

function App() {
    //TODO: remove this from app component
    const [authState, setAuthState] = useState(initialState);

    const changeAuthState = (state) => {
        //TODO: validation
        localStorage.setItem('token', state.token ?? '')
        setAuthState(state);
    }

    const contextData = {
        token: authState.token,
        isAuthenticated: !!authState.token,
        changeAuthState
    }

    return (
        <AuthContext.Provider value = {contextData}>
            <div id="box">
                <Header/>
                <main id="main-content">
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/affiche' element={<Affiche/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/gigs' element={<Gigs/>}/>
                        <Route path='/gigs/:id' element={<Gig/>}/>

                        <Route path='/login' element={<Login/>}/>
                        <Route path='/register' element={<Register/>}/>
                    </Routes>
                </main>
                    <Footer />
            </div>
        </AuthContext.Provider>
    )

}

export default App
