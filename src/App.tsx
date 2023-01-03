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
    // containerRef?.current?.classList.add("container-revealed")
    const theContainer = document.getElementById("the-container")!
    const theContent = document.getElementById("the-content")!
    theContainer.classList.add("container-revealed")
    theContent.classList.remove("content-hidden")
    theContent.classList.add("content-revealed")
    console.log("button was clicked!")
  }

  return (
    <div className="App">
    {/* <div className="container" ref={containerRef}>
      <div className="card" ref={cardRef}> */}
      <div className="container" id="the-container">
        <div className="card">
            <div className="image">
              {/* <img src="https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg"/> */}
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
          <div className="content content-hidden" id="the-content">
            Hi!
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
