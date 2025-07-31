import { useState } from 'react';
import {Wizard} from './components';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <Wizard>
          </Wizard>
      </div>
    </>
  )
}

export default App
