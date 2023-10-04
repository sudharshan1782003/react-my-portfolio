import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import MyWorksPage from './components/MyWorksPage';
import Contents from './Contents';
import Footer from './components/Footer';


function App() {
  return (
    <div className='font'>
      <Navbar />
        <Routes>
          <Route path='/' element={<Contents />} />
          <Route path='myworks/:id' element={<MyWorksPage />} />
      </Routes>
      <div className='max-[768px]:pl-0 pl-64 text-white pt-16 pb-6'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
