import "./App.css"; 
import DisplayDateTime from './component/DateTime.js'
import DisplayPastries from './component/Pastries.js'
import UserBar from './component/UserBar.js';
import DisplayDices from './component/Dices.js'
import { useState } from 'react';

function App() {
  const [user, setUser] = useState('')

  return (
    <>
      <div className='App'>
        <DisplayDateTime />
        <DisplayPastries />
        <UserBar user={user} setUser={setUser} />
        <DisplayDices />
      </div>
    </>
  )
}

export default App;


