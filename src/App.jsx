import {Routes, Route} from 'react-router-dom';
import {useState} from "react";

import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import Footer from "./components/footer/FooterComp.jsx";
import Login from "./components/auth/Login.jsx";
import About from "./components/about/About.jsx";
import Affiche from "./components/affiche/Affiche.jsx";
import Gigs from "./components/gigs/Gigs.jsx";
import Gig from "./components/gigs/Gig.jsx";
import Register from "./components/auth/Register.jsx";

import {AuthContext} from "./contexts/AuthContext.js";
import Profile from "./components/profile/Profile.jsx";
import Schedule from "./components/schedule/Schedule.jsx";
import Artists from "./components/artists/Artists.jsx";
import Artist from "./components/artists/Artist.jsx";
import {Venue} from "./components/venues/Venue.jsx";
import CreateArtist from "./components/artists/CreateArtist.jsx";
import Venues from "./components/venues/Venues.jsx";
import CreateVenue from "./components/venues/CreateVenue.jsx";

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
            <div id="box"  className="flex flex-col min-h-screen">
                <Header/>
                <main id="main-content" className="flex-grow">
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/affiche' element={<Affiche/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/register' element={<Register/>}/>

                        { contextData.isAuthenticated && (
                            <>
                                <Route path='/profile' element={<Profile/>}/>

                                <Route path='/schedule' element={<Schedule/>}/>

                                <Route path='/gigs' element={<Gigs/>}/>
                                <Route path='/gigs/:id' element={<Gig/>}/>

                                <Route path='/venues' element={<Venues/>}/>
                                <Route path='/venues/:id' element={<Venue/>}/>
                                <Route path='/venues/create' element={<CreateVenue/>}/>
                                {/*<Route path='/venues/:id/edit' element={<EditVenues/>}/>*/}

                                <Route path='/artists' element={<Artists/>}/>
                                <Route path='/artists/:id' element={<Artist/>}/>
                                <Route path='/artists/create' element={<CreateArtist/>}/>
                                {/*<Route path='/artists/:id/edit' element={<EditArtist/>}/>*/}


                                {/*<Route path='/songs' element={<Songs/>}/>*/}
                                {/*<Route path='/song/:id' element={<Song/>}/>*/}
                            </>
                        )}
                    </Routes>
                </main>
                    <Footer />
            </div>
        </AuthContext.Provider>
    )
}

export default App
