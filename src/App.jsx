import {Routes, Route} from 'react-router-dom';

import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import Footer from "./components/footer/FooterComp.jsx";
import Login from "./components/auth/Login.jsx";
import About from "./components/about/About.jsx";
import Affiche from "./components/affiche/Affiche.jsx";
import Gigs from "./components/gigs/Gigs.jsx";
import Gig from "./components/gigs/Gig.jsx";
import Register from "./components/auth/Register.jsx";

import {AuthContextProvider} from "./contexts/AuthContext.jsx";
import Profile from "./components/profile/Profile.jsx";
import Schedule from "./components/meetups/Schedule.jsx";
import Artists from "./components/artists/Artists.jsx";
import Artist from "./components/artists/Artist.jsx";
import Venue from "./components/venues/Venue.jsx";
import CreateArtist from "./components/artists/CreateArtist.jsx";
import Venues from "./components/venues/Venues.jsx";
import CreateVenue from "./components/venues/CreateVenue.jsx";
import EditArtist from "./components/artists/EditArtist.jsx";
import EditVenue from "./components/venues/EditVenue.jsx";
import CreateMeetup from "./components/meetups/CreateMeetup.jsx";
import EditMeetup from "./components/meetups/EditMeetup.jsx";
import Meetup from "./components/meetups/Meetup.jsx";
import CreateGig from "./components/gigs/CreateGig.jsx";
import EditGig from "./components/gigs/EditGig.jsx";

function App() {
    return (
        <AuthContextProvider>
                <div id="box" className="flex flex-col min-h-screen">
                    <Header/>
                    <main id="main-content" className="flex-grow">
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/about' element={<About/>}/>
                            <Route path='/affiche' element={<Affiche/>}/>
                            <Route path='/login' element={<Login/>}/>
                            <Route path='/register' element={<Register/>}/>

                            <Route path='/profile' element={<Profile/>}/>

                            <Route path='/schedule' element={<Schedule/>}/>
                            <Route path='/meetups/:id' element={<Meetup/>}/>
                            <Route path='/meetups/create/:gigId' element={<CreateMeetup/>}/>
                            <Route path='/meetups/:id/edit' element={<EditMeetup/>}/>

                            <Route path='/gigs' element={<Gigs/>}/>
                            <Route path='/gigs/:id' element={<Gig/>}/>
                            <Route path='/gigs/create' element={<CreateGig/>}/>
                            <Route path='/gigs/:id/edit' element={<EditGig/>}/>

                            <Route path='/venues' element={<Venues/>}/>
                            <Route path='/venues/:id' element={<Venue/>}/>
                            <Route path='/venues/create' element={<CreateVenue/>}/>
                            <Route path='/venues/:id/edit' element={<EditVenue/>}/>

                            <Route path='/artists' element={<Artists/>}/>
                            <Route path='/artists/:id' element={<Artist/>}/>
                            <Route path='/artists/create' element={<CreateArtist/>}/>
                            <Route path='/artists/:id/edit' element={<EditArtist/>}/>

                            {/*<Route path='/songs' element={<Songs/>}/>*/}
                            {/*<Route path='/song/:id' element={<Song/>}/>*/}
                        </Routes>
                    </main>
                    <Footer/>
                </div>
        </AuthContextProvider>
    )
}

export default App
