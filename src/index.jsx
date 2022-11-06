import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import FakeUserAuthContextProvider from "./components/FakeUserAuthClearance"


ReactDOM.createRoot(document.getElementById('root')).render(
  <FakeUserAuthContextProvider>
  <App /></FakeUserAuthContextProvider>
		
    
)