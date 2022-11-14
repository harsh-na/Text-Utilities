//ABOUT.JS =>  DARK MODE IS COMMENTED

// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// let name="Harshit saxena";
function App() {
  return (
    <>
   <Navbar title='TextUtils'/>
   <div className="container my-3">
   <TextForm heading ="Enter the text to analyse"/>
   {/*<About/>*/}
   </div>
    </>
    
  );//returning JSX(java script XML)
}

export default App;

