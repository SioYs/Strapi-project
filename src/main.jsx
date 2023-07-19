import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AppProvider from './Components/Context'

import './index.css'

const Starter = () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  )
}
export default Starter
