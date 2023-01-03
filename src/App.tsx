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
