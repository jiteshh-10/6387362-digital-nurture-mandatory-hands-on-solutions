import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Layout from './Layout';
import Display from './pages/Display';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="home" element={<Home/>}/>
      <Route path="display" element={<Display/>}/>
      <Route path="contact" element={<Contact/>}/>
       </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;


