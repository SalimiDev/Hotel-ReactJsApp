import { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
//Componennts
import LoadingSpinner from './components/LoadingSpinner';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Rooms from './pages/Rooms/Rooms';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Activities from './pages/Activities/Activities';
import GalleryPage from './pages/GalleryPage';
import ContactUs from './pages/ContactUs';
import ComingSoon from './pages/ComingSoon';
import GuestBook from './pages/GuestBook/GuestBook';
import Event from './pages/Event';

function App() {
    const [preLoader, setPreLoader] = useState(true);
    const location = useLocation();

    return (
        <>
            {preLoader ? (
                <LoadingSpinner loader={{ preLoader, setPreLoader }} />
            ) : (
                <>
                    {location.pathname !== '/hillter/coming-soon' && <Header />}
                    <Routes>
                        <Route path='/' element={<Navigate replace to='/hillter' />} />
                        <Route path='/hillter' element={<Home />} />
                        <Route path='/hillter/rooms/' element={<Rooms />}>
                            <Route path=':roomId/*' element={<Rooms />} />
                        </Route>
                        <Route path='*' element={<NotFound />} />
                        <Route path='/hillter/about' element={<About />} />
                        <Route path='/hillter/activities' element={<Activities />} />
                        <Route path='/hillter/gallery' element={<GalleryPage />} />
                        <Route path='/hillter/contact' element={<ContactUs />} />
                        <Route path='/hillter/coming-soon' element={<ComingSoon />} />
                        <Route path='/hillter/guest-book' element={<GuestBook />} />
                        <Route path='/hillter/event' element={<Event />} />
                    </Routes>
                    {location.pathname !== '/hillter/coming-soon' && <Footer />}
                    {location.pathname !== '/hillter/coming-soon' && <ScrollToTop />}
                </>
            )}
        </>
    );
}

export default App;
