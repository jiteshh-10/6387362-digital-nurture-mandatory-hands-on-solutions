import logo from './logo.svg';
import './App.css';
import Home from './Components/Home.js';
import About from './About.js';
import Contact from './Contact.js';

function App() {
        return (
        <div className="App">
            <Home/>
            <About/>
            <Contact/>
        </div>
    );
}

export default App;
