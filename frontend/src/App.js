import "./App.css"; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './view/Home.js'
import { Result } from './view/Result.js'

function App() {
  
  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/results' element={<Result/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;


