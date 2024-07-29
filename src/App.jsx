import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Components/Home'
import CombinedAuth from './Components/CombinedAuth'
function App() {
  return (
 <div>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<CombinedAuth/>}/>
    <Route path='/home' element={<Home/>}/>
  </Routes>
  </BrowserRouter>
  
 </div>
  )
}

export default App
