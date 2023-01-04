import { z } from "zod";

import "./ApiKey.css"

const APIKeySchema = z.object({
    shortName: z.string().optional(),
    url: z.string().url(),
    apiKey: z.string().optional()
})
  
type APIKeysType = Array<z.infer<typeof APIKeySchema>>

/* 
If you want to predefine your own keys, but keep them out of your git repo,
Create a .env file in this repo (which is has been ignored in _gitignore)
Add variables for your keys, e.g.
VITE_UNSPLASH_API_KEY=YOUR_KEY_HERE
Note that only variables beginning with 'VITE_' can be accessed by a vite app
*/ 

export const defaultAPIKeyData: APIKeysType = [
    {
        shortName: 'unsplash',
        url: 'https://api.unsplash.com/search/photos',
        apiKey: import.meta.env.VITE_UNSPLASH_API_KEY
    },
    {
        shortName: 'bored',
        url: 'https://www.boredapi.com/api/'
    },
    {
        shortName: 'chucknorris',
        url: 'https://api.chucknorris.io/jokes/random'
    },
    {
        shortName: 'countries',
        // https://restcountries.com/v3.1/name/India?fullText=true
        url: 'https://restcountries.com/v3.1/name/'
    }
]

interface ApiKeyProps {
    apiKeys:  APIKeysType
}

export default function ApiKeys(props: ApiKeyProps) {
    return <div className="apiKey-container">
        {
        props.apiKeys.map( a => (
            <div className="apiKey-blockRow" key={a.shortName}>
                <div className="apiKey-row">
                    <label htmlFor="name" className="apiKey-element">Name</label>
                    <input type="text" name="name" className="apiKey-element" 
                    defaultValue={ a.shortName }/>
                </div>
                <div className="apiKey-row">
                    <label htmlFor="url" className="apiKey-element">URL</label>
                    <input type="text" name="url" className="apiKey-element apiKey-url" 
                    defaultValue={ a.url }/>
                </div>
                    <div className="apiKey-row">
                    <label htmlFor="key" className="apiKey-element">API Key</label>
                    <input type="text" name="key" className="apiKey-element apiKey-key" 
                    defaultValue={ a.apiKey }/>
                </div>
            </div>)
            )
        }
    </div>
}