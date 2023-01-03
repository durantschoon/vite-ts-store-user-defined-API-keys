import { useState, useRef, MouseEvent } from 'react'
import { z } from "zod";

import './App.css'

const APIKeySchema = z.object({
  shortName: z.string().optional(),
  url: z.string().url(),
  apiKey: z.string().optional()
})

type APIKeys = Array<z.infer<typeof APIKeySchema>>

/* 
  If you want to predefine your own keys, but keep them out of your git repo,
  Create a .env file in this repo (which is has been ignored in _gitignore)
  Add variables for your keys, e.g.
  VITE_UNSPLASH_API_KEY=YOUR_KEY_HERE
  Note that only variables beginning with 'VITE_' can be accessed by a vite app
*/ 

const apiKeyData: APIKeys = [
  {
    shortName: 'unsplash',
    url: 'https://api.unsplash.com/search/photos',
    apiKey: import.meta.env.VITE_UNSPLASH_API_KEY
  }
]

console.log(import.meta.env)

function App() {
  const [apiKeys, setApiKeys] = useState(apiKeyData)
  // const containerRef = useRef(null)
  // const cardRef = useRef(null)

  const handleClick = (event: MouseEvent) => {
    event.stopPropagation()    
    const apiKeysDiv = document.getElementById("apiKeysDiv")!
    apiKeysDiv.classList.remove("apiKeysDiv-hidden")    
    console.log("button was clicked!")
    console.log(apiKeysDiv.classList)
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
        Hi!
      </div>
    </div>
  )
}

export default App
