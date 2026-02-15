import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Flexbox from './pages/Flexbox';
import Form from './pages/Form';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flexbox" element={<Flexbox />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;