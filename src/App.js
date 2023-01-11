import './App.css';
import Navbar from './components/navbar';
import About from './components/about';
import Experience from './components/Experience';
import Project from './components/Projects'; 
import Contact from './components/Contact'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <About/>
        <Project/>
        <Experience/>
        <Contact/>
        <Routes>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/projects' element={<Project/>}/>
          <Route exact path='/experience' element={<Experience/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
