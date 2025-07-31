import { useState } from 'react';
import {Stepper} from './components';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <Stepper/>
      </div>
    </>
  )
}

export default App
