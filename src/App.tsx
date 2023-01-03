import { useState } from 'react'
import { z } from "zod";

import './App.css'

const APIKeysSchema = z.object({
  shortName: z.string().optional(),
  url: z.string().url(),
  apiKey: z.string().optional()
})

type APIKeys = Array<z.infer<typeof APIKeysSchema>>

/* 
  create a .env file in the repo (ignored in _gitignore)
  Add lines for your keys, e.g.
  UNSPLASH_API_KEY=YOUR_KEY_HERE
*/ 

keyData = [
  {
    shortName: 'unsplash',
    url: 'https://api.unsplash.com/search/photos',
    apiKey: import.meta.env.UNSPLASH_API_KEY
  }
]

function App() {
  const [apiKeys, setApiKeys] = useState({} as APIKeys)

  return (
    <div className="App">
      <div className="card">
        <button className="fa fa-key" >
        </button>
        <p>
          Click the key button to add an API key
        </p>
      </div>
    </div>
  )
}

export default App
