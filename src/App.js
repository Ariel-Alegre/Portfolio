import LandingPage from "./components/LandingPage/LandingPage";
import {BrowserRouter , Route, Routes} from 'react-router-dom';
import Home from "./components/Home/Home";
import  'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
       <Routes>
         <Route exact path = '/' element={<LandingPage/>}/> 
         <Route exact path = '/home' element={<Home/>}/> 
       </Routes>
    </BrowserRouter>
  );
}

export default App;
