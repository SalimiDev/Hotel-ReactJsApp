//Componennts
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Rooms from './pages/Rooms/Rooms';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/rooms' element={<Rooms />} />
                
            </Routes>
            <Footer />
        </>
    );
}

export default App;
