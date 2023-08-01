import './Style.css'
import './App.css';
import SignIn from './components/SignIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Dokumen from './components/Dokumen';
import Kajian from './components/Kajian';
import Artikel from './components/Artikel';
import Shortener from './components/Shortener';
import MasterDataCategory from './components/MasterDataCategory';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<SignIn />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='form-dokumen' element={<Dokumen />} />
            <Route path='form-kajian' element={<Kajian />} />
            <Route path='form-artikel' element={<Artikel />} />
            <Route path='master-data' element={<MasterDataCategory />} />
            <Route path='shortener' element={<Shortener />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
