import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import Recipes from './pages/Recipes';

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipes' element={<Recipes />} />
      </Routes>
    </>
  );
}

export default App;
