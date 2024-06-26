import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { initializeApp } from 'firebase/app'
import { configFirebase } from './config'
import { getFirestore } from 'firebase/firestore'

export const app = initializeApp(configFirebase)
export const database = getFirestore(app)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
