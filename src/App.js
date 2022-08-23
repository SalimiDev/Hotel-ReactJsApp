import { useState } from 'react';
//React router
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
import Events from './pages/Events/Events';
import Blogs from './pages/Blogs/Blogs';
import PostDetails from './pages/Blogs/PostDetails';
import Restaurant from './pages/Restaurant/Restaurant';
import SearchPage from './pages/Search/SearchPage';

function App() {
    const [preLoader, setPreLoader] = useState(true);
    const location = useLocation();

    // In component mounting scroll to top of page
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);

    return (
        <>
            {preLoader ? (
                <LoadingSpinner loader={{ preLoader, setPreLoader }} />
            ) : (
                <>
                    {location.pathname !== '/hillter/coming-soon' && <Header />}
                    <Routes>
                        <Route path='/hillter/' element={<Navigate replace to='/' />} />
                        <Route path='/' element={<Home />} />
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
                        <Route path='/hillter/event/' element={<Events />} />
                        <Route path='/hillter/blog/*' element={<Blogs />} />
                        <Route path='/hillter/blog/posts/post-details/:postTitle/' element={<PostDetails />} />
                        <Route path='/hillter/restaurant' element={<Restaurant />} />
                        <Route path='/hillter/search/*' element={<SearchPage />} />
                    </Routes>
                    {location.pathname !== '/hillter/coming-soon' && <Footer />}
                    {location.pathname !== '/hillter/coming-soon' && <ScrollToTop />}
                </>
            )}
        </>
    );
}

export default App;
