import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contactme from './components/contactme';
import Home from './components/Home';
import DiceRoll from './components/character-count/displaypage';
import Dispalycolorgenerator from './components/colour-generator/mainpage';


function App(){
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = '/Home' element={<Home/>}></Route>
          <Route path = '/ContactUs' element={<Contactme/>}></Route>
          <Route path = '/' element={<Dispalycolorgenerator />}></Route>          
          <Route path = '/Charactercount' element={<DiceRoll />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;