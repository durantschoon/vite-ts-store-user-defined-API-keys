import { useState, useRef, MouseEvent } from 'react'
import ApiKeys, { defaultAPIKeyData } from "./components/ApiKey"

import './App.css'

function App() {
  const [apiKeys, setApiKeys] = useState(defaultAPIKeyData)
  // const containerRef = useRef(null)
  // const cardRef = useRef(null)

  const handleClick = (event: MouseEvent) => {
    event.stopPropagation()    
    const apiKeysDiv = document.getElementById("apiKeysDiv")!
    apiKeysDiv.classList.remove("apiKeysDiv-hidden")   
  }

  return (
    <div id="App">
      <div className="card">
        <div className="button-and-text">
            <button 
            className="fa fa-key key-button" 
            onClick={handleClick}
            >
            </button>
            <p>
              Click the key button to add an API key
            </p>
          </div>
      </div>
      <div className="card apiKeysDiv-hidden" id="apiKeysDiv">
        <ApiKeys { ...{apiKeys} }/>
      </div>
    </div>
  )
}

export default App
