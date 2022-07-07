//Componennts
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Rooms from './pages/Rooms/Rooms';
import { Routes, Route, Navigate } from 'react-router-dom';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Activities from './pages/Activities/Activities';
import GalleryPage from './pages/GalleryPage';
import ContactUs from './pages/ContactUs';
import ComingSoon from './pages/ComingSoon';

function App() {
//     const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
//     const NOW_IN_MS = new Date().getTime();
    
//   const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
    return (
        <>
            <Header />
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
            </Routes>
            <Footer />
        </>
    );
}

export default App;
