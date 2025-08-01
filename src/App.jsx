import {Wizard, Step1, Step4, Step3, Step2, Viewer} from './components/Wizard';
import './App.css';

function App() {

  return (
    <>
      <div>
          <Wizard>
              <Step1 />
              <Step2 />
              <Step3 />
              <Step4 />
              <Viewer />
          </Wizard>
      </div>
    </>
  )
}

export default App
