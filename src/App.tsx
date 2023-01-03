import { useState } from 'react'
import { z } from "zod";

import './App.css'

const APIKeysSchema = z.object({
  shortName: z.string().optional(),
  url: z.string().url(),
  apiKey: z.string()
})

type APIKeys = Array<z.infer<typeof APIKeysSchema>>

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
